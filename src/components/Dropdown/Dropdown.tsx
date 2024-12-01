import React from 'react';
import styled from 'styled-components';
import { type DropdownProps } from './Dropdown.types';

// Create a type specifically for the styled component that omits unnecessary props
type StyledSelectProps = Omit<DropdownProps, 'options' | 'onChange'>;

const DropdownContainer = styled.div`
  margin: 16px 0;
`;

const StyledSelect = styled.select<StyledSelectProps>`
  padding: 10px;
  font-size: 1rem;
  border-radius: 5px;
  border: 1px solid #ccc;
  background-color: ${(props) => props.backgroundColor || '#ffffff'};
  color: #333;

  &:disabled {
    background-color: #f0f0f0;
    cursor: not-allowed;
  }
`;

const Dropdown: React.FC<DropdownProps> = ({ options, disabled, onChange, backgroundColor }) => {
  return (
    <DropdownContainer>
      <StyledSelect disabled={disabled} onChange={onChange} backgroundColor={backgroundColor}>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </StyledSelect>
    </DropdownContainer>
  );
};

export default Dropdown;
