import css from './SearchBox.module.css';
import { changeFilter, selectNameFilter } from '../../redux/filtersSlice';
import { useDispatch, useSelector } from 'react-redux';

const SearchBox = () => {
  const { name } = useSelector(selectNameFilter);
  const dispatch = useDispatch();

  const handleChangeFilter = e => {
    dispatch(changeFilter(e.target.value));
  };
  return (
    <div className={css.containerInput}>
      <p>Find contacts by name</p>
      <input
        className={css.searchInput}
        type="text"
        value={name}
        onChange={handleChangeFilter}
        placeholder="Search contact by name or phone number"
      />
    </div>
  );
};
export default SearchBox;
