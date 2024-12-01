import React from 'react';
import styled from 'styled-components';
import { type RadioButtonProps } from './Radio_button.types';

const RadioContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 8px 0;
`;

const StyledRadio = styled.input<RadioButtonProps>`
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
