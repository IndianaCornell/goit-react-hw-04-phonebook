import { FilterTitle, FilterInputStyled } from './Filter.styled';

export const Filter = ({ filteredItems, onFind }) => {
  return (
    <>
      <FilterTitle>Find contacts by name</FilterTitle>
      <FilterInputStyled
        type="text"
        value={filteredItems}
        onChange={evt => onFind(evt.target.value)}
      />
    </>
  );
};
