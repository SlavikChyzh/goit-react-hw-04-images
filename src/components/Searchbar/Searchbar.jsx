import PropTypes from 'prop-types';
import { useState } from 'react';

const Searchbar = ({ onSubmit }) => {
  const [search, setSearch] = useState('');

  const onChange = ({ target }) => {
    setSearch(target.value);
  };

  const handlerSubmit = e => {
    e.preventDefault();
    onSubmit(search.trim());
  };

  return (
    <header className="Searchbar">
      <form className="SearchForm" onSubmit={handlerSubmit}>
        <input
          className="SearchForm-input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={onChange}
        />
        <button type="submit" className="SearchForm-button">
          <span className="SearchForm-button-label">Search</span>
        </button>
      </form>
    </header>
  );
};

export { Searchbar };
Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
