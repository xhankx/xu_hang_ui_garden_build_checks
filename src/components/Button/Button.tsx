//Button.tsx
import React from 'react';
import styled from 'styled-components';
import { type ButtonProps } from './Button.types';

const StyledButton = styled.button<ButtonProps>`
  border: 2px solid transparent;
  line-height: 1.5;
  font-size: 13px;
  font-weight: 600;
  border-radius: 5px;
  padding: ${(props) => (props.size === 'small' ? '6px 20px' : props.size === 'medium' ? '9px 30px' : '13.5px 45px')};
  color: #ffffff;
  background-color: ${(props) => (props.disabled ? '#cccccc' : props.backgroundColor)};
  opacity: ${(props) => (props.disabled ? 0.6 : 1)};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  pointer-events: ${(props) => (props.disabled ? 'none' : 'auto')};
  &:hover {
    background-color: ${(props) => (!props.disabled ? '#add8e6' : '#cccccc')};
  }
  &:active {
    border: solid 2px #1b116e;
    padding: ${(props) => (props.size === 'small' ? '5px 19px' : props.size === 'medium' ? '9px 27px' : '15px 31px')};
  }
`;

const Button: React.FC<ButtonProps> = ({ size, disabled, label, backgroundColor, ...props }) => {
  return (
    <StyledButton type="button" disabled={disabled} backgroundColor={backgroundColor} size={size} {...props}>
      {label}
    </StyledButton>
  );
};

export default Button;
