import React from 'react';
import PropTypes from 'prop-types';

const Content = (props) => <div className="App-content">{props.children}</div>;

Content.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Content;
