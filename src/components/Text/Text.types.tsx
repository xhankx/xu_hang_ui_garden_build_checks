// Text.types.ts

export interface TextProps {
  fontSize?: string;        // Optional: Size of the font
  color?: string;           // Optional: Color of the text
  fontWeight?: string;      // Optional: Font weight (e.g., 'bold', 'normal')
  lineHeight?: string;      // Optional: Line height
  margin?: string;          // Optional: Margin for the text
  children: React.ReactNode; // Required: Content to display inside the Text component
}
