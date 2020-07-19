import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Content extends Component {
  render() {
    return (
      <div className="App-content">
        {this.props.children}
      </div>
    );
  }
}

Content.propTypes = {
  children: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default Content;
