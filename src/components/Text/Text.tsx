import React from 'react';
import styled from 'styled-components';
import { type TextProps } from './Text.types';

const StyledText = styled.p<TextProps>`
  font-size: ${(props) => props.fontSize || '1rem'};
  color: ${(props) => props.color || '#333'};
  font-weight: ${(props) => props.fontWeight || 'normal'};
  line-height: ${(props) => props.lineHeight || '1.5'};
  margin: ${(props) => props.margin || '0'};
`;

const Text: React.FC<TextProps> = ({ children, fontSize, color, fontWeight, lineHeight, margin }) => {
  return (
    <StyledText
      fontSize={fontSize}
      color={color}
      fontWeight={fontWeight}
      lineHeight={lineHeight}
      margin={margin}
    >
      {children}
    </StyledText>
  );
};

export default Text;
