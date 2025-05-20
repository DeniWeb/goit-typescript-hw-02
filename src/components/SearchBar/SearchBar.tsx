import { IoSearchSharp } from 'react-icons/io5';
import { useState } from 'react';
import s from './SearchBar.module.css';
import toast from 'react-hot-toast';

const SearchBar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleChange = e => {
    setQuery(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (!query.trim()) {
      toast.error('You need to write something!');
      return;
    }
    onSubmit(query);
    setQuery('');
  };

  return (
    <header className={s.header_container}>
      <form onSubmit={handleSubmit} className={s.header_form}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          className={s.header_input}
          value={query}
          onChange={handleChange}
        />
        <button type="submit" className={s.header_btn}>
          Search <IoSearchSharp />
        </button>
      </form>
    </header>
  );
};

export default SearchBar;
