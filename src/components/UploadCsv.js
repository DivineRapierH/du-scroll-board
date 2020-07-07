import PropTypes from 'prop-types';
import React, { Component } from 'react';

export class UploadCsv extends Component {
  static propTypes = {
    onFileUpload: PropTypes.func
  }

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fileInput = React.createRef();
  }

  handleSubmit(event) {
    event.preventDefault();
    const { onFileUpload } = this.props;
    console.log(
      `Selected file - ${this.fileInput.current.files[0].name}`
    );
    onFileUpload(this.fileInput.current.files[0]);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Upload file:
          <input type="file" ref={this.fileInput} accept=".csv" />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    )
  }
}

export default UploadCsv
