import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer className="App-footer">
        <span className="developed-by">Elaborado por: </span>
        <span>
          <a
            href="https://www.linkedin.com/in/j%C3%A9ssicatavaresrocha/"
            rel="noopener noreferrer"
            target="_blank"
          >
            Jéssica Tavares,
          </a>{' '}
          <a
            href="https://www.linkedin.com/in/orlando-messias-a5b7644b/"
            rel="noopener noreferrer"
            target="_blank"
          >
            Henrique Baeta,
          </a>{' '}
          <a
            href="https://www.linkedin.com/in/orlando-messias-a5b7644b/"
            rel="noopener noreferrer"
            target="_blank"
          >
            Orlando Messias
          </a>
        </span>
      </footer>
    );
  }
}

export default Footer;
