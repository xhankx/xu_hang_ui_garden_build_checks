import React from 'react';
import styled from 'styled-components';
import { type LabelProps } from './Label.types';

// Create a type specifically for the styled label to exclude unnecessary props
type StyledLabelProps = Omit<LabelProps, 'text'>;

const StyledLabel = styled.label<StyledLabelProps>`
  font-size: ${(props) => props.fontSize || '1rem'};
  color: ${(props) => props.color || '#333'};
  font-weight: ${(props) => props.fontWeight || 'normal'};
  margin: ${(props) => props.margin || '0'};
`;

const Label: React.FC<LabelProps> = ({ text, htmlFor, fontSize, color, fontWeight, margin, ...props }) => {
  return (
    <StyledLabel
      htmlFor={htmlFor}
      fontSize={fontSize}
      color={color}
      fontWeight={fontWeight}
      margin={margin}
      {...props}
    >
      {text}
    </StyledLabel>
  );
};

export default Label;
