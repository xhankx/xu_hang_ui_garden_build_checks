import React from 'react';
import styled from 'styled-components';
import { type HeroImageProps } from './Hero_image.types';

interface StyledHeroContainerProps {
  imageUrl: string;
  height?: string;
}

const HeroContainer = styled.div<StyledHeroContainerProps>`
  position: relative;
  width: 100%;
  height: ${(props) => props.height || '400px'};
  background-image: url(${(props) => props.imageUrl});
  background-size: cover;
  background-position: center;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const HeroText = styled.div`
  background: rgba(0, 0, 0, 0.5);
  padding: 20px;
  border-radius: 5px;
  max-width: 80%;
`;

const HeroImage: React.FC<HeroImageProps> = ({ title, imageUrl, height }) => {
  return (
    <HeroContainer imageUrl={imageUrl} height={height}>
      <HeroText>
        <h1>{title}</h1>
      </HeroText>
    </HeroContainer>
  );
};

export default HeroImage;
