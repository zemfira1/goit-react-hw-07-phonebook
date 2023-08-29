import { useDispatch, useSelector } from 'react-redux';
import { FilterZone, Input } from './Filter.styled';
import { toFilter } from 'redux/filterSlice';
import { selectFilter } from 'redux/selectors';

export const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const changeFilter = event => {
    dispatch(toFilter(event.currentTarget.value));
  };

  return (
    <FilterZone>
      Find contacts by name
      <Input type="text" value={filter} onChange={changeFilter} />
    </FilterZone>
  );
};
