import { Component } from 'react';
import PropTypes from 'prop-types';

class Searchbar extends Component {
  state = {
    search: '',
  };

  onChange = ({ target }) => {
    this.setState({ search: target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.search);
  };

  render() {
    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.onSubmit}>
          <input
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.onChange}
          />
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>
        </form>
      </header>
    );
  }
}

export { Searchbar };
Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
