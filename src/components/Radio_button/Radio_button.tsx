import React from 'react';
import styled from 'styled-components';
import { type RadioButtonProps } from './Radio_button.types';

// Create a type specifically for the styled input to omit unnecessary props
type StyledRadioProps = Omit<RadioButtonProps, 'label' | 'name' | 'value' | 'checked' | 'onChange'>;

const RadioContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 8px 0;
`;

const StyledRadio = styled.input<StyledRadioProps>`
  margin-right: 10px;
  accent-color: ${(props) => props.color || '#007bff'};
`;

const RadioLabel = styled.label`
  font-size: 1rem;
  color: #333;
`;

const RadioButton: React.FC<RadioButtonProps> = ({ label, name, value, checked, onChange, color }) => {
  return (
    <RadioContainer>
      <StyledRadio
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        color={color}
      />
      <RadioLabel>{label}</RadioLabel>
    </RadioContainer>
  );
};

export default RadioButton;
