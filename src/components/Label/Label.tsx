import React from 'react';
import styled from 'styled-components';
import { type LabelProps } from './Label.types';

const StyledLabel = styled.label<LabelProps>`
  font-size: ${(props) => props.fontSize || '1rem'};
  color: ${(props) => props.color || '#333'};
  font-weight: ${(props) => props.fontWeight || 'normal'};
  margin: ${(props) => props.margin || '0'};
`;

const Label: React.FC<LabelProps> = ({ text, htmlFor, fontSize, color, fontWeight, margin }) => {
  return (
    <StyledLabel htmlFor={htmlFor} fontSize={fontSize} color={color} fontWeight={fontWeight} margin={margin}>
      {text}
    </StyledLabel>
  );
};

export default Label;
