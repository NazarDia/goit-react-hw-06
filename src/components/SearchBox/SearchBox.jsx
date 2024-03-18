import css from './SearchBox.module.css';

const SearchBox = ({ onSearchChange }) => {
  return (
    <div className={css.containerInput}>
      <p>Find contacts by name</p>
      <input
        className={css.searchInput}
        type="text"
        onChange={e => onSearchChange(e.target.value)}
      />
    </div>
  );
};
export default SearchBox;
