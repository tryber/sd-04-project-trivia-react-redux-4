import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getCategories } from '../services';

class Settings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
    };

    this.selectCategory = this.selectCategory.bind(this);
    this.selectDifficulty = this.selectDifficulty.bind(this);
    this.selectType = this.selectType.bind(this);
  }

  componentDidMount() {
    this.setCategories();
  }

  async setCategories() {
    const categories = await getCategories();
    this.setState({
      categories: categories.trivia_categories,
    });
  }

  selectCategory() {
    const { categories } = this.state;
    return (
      <div>
        <label htmlFor="category">Category</label>
        <select name="category" id="category">
          <option>Choose your option</option>
          <option>All</option>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>
    );
  }

  selectDifficulty() {
    const { categories } = this.state;
    console.log(categories);
    return (
      <div>
        <label htmlFor="difficulty">Difficulty</label>
        <select name="difficulty" id="difficulty">
          <option>Choose your option</option>
          <option>All</option>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
      </div>
    );
  }

  selectType() {
    const { categories } = this.state;
    console.log(categories);
    return (
      <div>
        <label htmlFor="type">Type</label>
        <select data-testid="question-type-dropdown" name="type" id="type">
          <option>Choose your option</option>
          <option>All</option>
          <option value="multiple">Multiple choice</option>
          <option value="boolean">True or False</option>
        </select>
      </div>
    );
  }

  render() {
    return (
      <div>
        <h2 data-testid="settings-title">Settings page</h2>
        {this.selectCategory()}
        {this.selectDifficulty()}
        {this.selectType()}
        <Link to="/">Back</Link>
      </div>
    );
  }
}

export default Settings;
