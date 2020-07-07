import * as Papa from 'papaparse';
import React, { Component } from 'react';
import BoardView from './BoardView';
import UploadCsv from './UploadCsv';

 class BoardData extends Component {
  constructor(props) {
    super(props);

    this.state = {
      config: {},
      isLoaded: false
    };
  }
  // readCsv = () => {
  //   console.log(RECap);
  //   Papa.parse(RECap, {
  //     complete: function(results) {
  //         console.log(results);
  //     }
  // });
  // }

  onFileUpload = (file) => {
    Papa.parse(file, {
      header: true,
      complete: this.convertCsvToBoardConfig
    });
  }

  convertCsvToBoardConfig = (csv) => {
    const { data, meta: { fields } } = csv;
    const plainData = [];
    data.forEach(row => {
      const rowList = [];
      for (const item in row) {
        rowList.push(row[item]);
      }
      plainData.push(rowList);
    });
    
    this.setState({
      config: {
        data: plainData,
        header: fields,
        rowNum: 10,
        waitTime: 1000,
        index: true
      },
      isLoaded: true
    });
  }

  render() {
    return (
      <div>
        <UploadCsv onFileUpload={this.onFileUpload} />
        <br />
        <BoardView config={this.state.config} isLoaded={this.state.isLoaded} />
      </div>
    )
  }
}

export default BoardData;
