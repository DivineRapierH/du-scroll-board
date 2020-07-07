import { ScrollBoard } from '@jiaminghi/data-view-react';
import PropTypes from 'prop-types';
import React from 'react';

function BoardView(props) {
  const { config, isLoaded } = props;
  console.log(config);
  return (
    isLoaded ? (
    <div>
      <ScrollBoard config={config} style={{width: '100%', height: '20rem'}} />
    </div>
  ) : (<div>no data</div>)
  );
}

BoardView.propTypes = {
  config: PropTypes.object
}

export default BoardView;

