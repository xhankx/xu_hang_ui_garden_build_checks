import React from 'react';
import styled from 'styled-components';
import { type CardProps } from './Card.types';

const CardContainer = styled.div<CardProps>`
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: ${(props) =>
    props.size === 'small'
      ? '200px'
      : props.size === 'medium'
      ? '400px'
      : '600px'};
  background-color: ${(props) => props.backgroundColor || '#ffffff'};
`;

const CardImage = styled.img`
  width: 100%;
  height: auto;
`;

const CardContent = styled.div`
  padding: 16px;
`;

const CardTitle = styled.h3`
  margin: 0;
  font-size: 1.5rem;
  color: #333;
`;

const CardText = styled.p`
  margin: 8px 0 0;
  font-size: 1rem;
  color: #666;
`;

const Card: React.FC<CardProps> = ({ title, content, imageUrl, backgroundColor, size }) => {
  return (
    <CardContainer backgroundColor={backgroundColor} size={size}>
      {imageUrl && <CardImage src={imageUrl} alt={title} />}
      <CardContent>
        <CardTitle>{title}</CardTitle>
        <CardText>{content}</CardText>
      </CardContent>
    </CardContainer>
  );
};

export default Card;
