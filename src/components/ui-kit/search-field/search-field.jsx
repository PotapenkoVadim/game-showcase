import { useState } from 'react';
import styled from 'styled-components';

const SearchFieldWrapper = styled.div`
  position: relative;
  border: 1px solid grey;
  padding: 2px 5px 2px 45px;
  border-radius: 3px;
  background-color: white;
`;

const StyledSearchField = styled.input`
  border: none;
  outline: none;
  background-color: transparent;

  &:hover,
  &:active {
    outline: none;
  }
`;

const Placeholder = styled.span`
  position: absolute;
  top: 50%;
  left: 2px;
  transform: translateY(-50%);
  color: grey;
  font-size: 12px;
`;

export default function SearchField({ handleChange, initialValue = '' }) {
  const [value, setValue] = useState(initialValue);

  const onChange = (event) => {
    setValue(event.target.value);
    handleChange(event.target.value);
  };

  return (
    <SearchFieldWrapper>
      <StyledSearchField
        type='text'
        value={value}
        onChange={onChange} />

      <Placeholder>Search:</Placeholder>
    </SearchFieldWrapper>
  );
}
