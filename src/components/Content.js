import React, { Component } from 'react';

class Content extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div className="App-content">
        {this.props.children}
      </div>
    );
  }
}

export default Content;
