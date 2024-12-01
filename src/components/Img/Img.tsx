import React from 'react';
import styled from 'styled-components';
import { type ImgProps } from './Img.types';

const StyledImage = styled.img<ImgProps>`
  width: ${(props) => props.width || '100%'};
  height: ${(props) => props.height || 'auto'};
  border-radius: ${(props) => props.borderRadius || '0'};
  object-fit: ${(props) => props.objectFit || 'cover'};
`;

const Img: React.FC<ImgProps> = ({ src, alt, width, height, borderRadius, objectFit }) => {
  return <StyledImage src={src} alt={alt} width={width} height={height} borderRadius={borderRadius} objectFit={objectFit} />;
};

export default Img;
