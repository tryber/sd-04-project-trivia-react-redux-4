import React, { Component } from 'react';

class Settings extends Component {
  state = {
    categories: [],
  };
  render() {
    return (
      <div>
        <h2>Settings page</h2>
      </div>
    );
  }
}

const select = () => {
  return (
    <form>
      <label htmlFor="category">Select Category:</label>
      <select id="category">
        <option></option>
      </select>

      <label htmlFor="difficulty">Select Difficulty:</label>
      <select id="difficulty">
        <option></option>
      </select>

      <label htmlFor="type">Select Type:</label>
      <select id="type">
        <option></option>
      </select>
    </form>
  );
};

export default Settings;
