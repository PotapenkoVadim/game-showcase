import { useState } from 'react';
import styled from 'styled-components';

const SelectWrapper = styled.div`
  position: relative;
  padding: 2px 2px 2px 55px;
  border-radius: 3px;
  background: white;
`;

const StyledSelect = styled.select`
  border: none;
  outline: none;
  background: transparent;
  width: 100%;

  &:hover,
  &:active {
    border: none;
    outline: none;
  }
`;

const Placeholder = styled.span`
  position: absolute;
  color: grey;
  font-size: 12px;
  top: 50%;
  left: 2px;
  transform: translateY(-50%);
`;

export default function Filter({
  labels,
  handleChange,
  placeholder,
  initialValue = ''
}) {
  const [value, setValue] = useState(initialValue);

  const onChange = (event) => {
    setValue(event.target.value);
    handleChange(event.target.value);
  };

  return (
    <>
      {labels.length > 0 && (
        <SelectWrapper>
          <StyledSelect
            onChange={onChange}
            value={value}>
            <option
              key='all'
              value=''>
              All
            </option>

            {labels.map((item) => (
              <option
                key={item.value}
                value={item.value}>
                {item.label}
              </option>
            ))}
          </StyledSelect>

          <Placeholder>{placeholder}:</Placeholder>
        </SelectWrapper>
      )}
    </>
  );
}
