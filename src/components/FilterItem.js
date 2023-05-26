import styled from 'styled-components';

const StyledFilterItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 82px;
`;

const StyledFilterTitle = styled.div`
  margin-top: 6px;
  text-align: center;
  cursor: pointer;
  ${props =>
    props.isSelected
      ? `
  text-decoration: underline;
  font-weight: bold;
  cursor: pointer;
  `
      : ''}
`;

const FilterItem = ({ onClick, image, korName, isSelected }) => {
  return (
    <StyledFilterItem onClick={onClick}>
      <img src={image} alt="img" />
      <StyledFilterTitle isSelected={isSelected}>{korName}</StyledFilterTitle>
    </StyledFilterItem>
  );
};

export default FilterItem;
