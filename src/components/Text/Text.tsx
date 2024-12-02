// Text.tsx
import React from 'react';
import styled from 'styled-components';
import { TextProps } from './Text.types'; // Import the types for Text

// Styled component using the passed props for styling
const StyledText = styled.p<TextProps>`
  font-size: ${(props) => props.fontSize || '1rem'}; // Default to 1rem if not provided
  color: ${(props) => props.color || '#333'};        // Default to #333 if not provided
  font-weight: ${(props) => props.fontWeight || 'normal'}; // Default to 'normal' if not provided
  line-height: ${(props) => props.lineHeight || '1.5'}; // Default to 1.5 if not provided
  margin: ${(props) => props.margin || '0'};         // Default to 0 if not provided
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
      {children}  {/* Render the children (content) inside the styled text */}
    </StyledText>
  );
};

export default Text;
