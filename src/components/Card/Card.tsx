import React from 'react';
import styled from 'styled-components';
import { type CardProps } from './Card.types';

const StyledCard = styled.div<CardProps>`
  border: 2px solid #ccc;
  padding: 10px;
  flex: 1;
  background-color: ${(props) =>
    props.disabled !== undefined && props.disabled
      ? '#cccccc'
      : props.backgroundColor};
  opacity: ${(props) =>
    props.disabled !== undefined && props.disabled ? 0.5 : 1};
  cursor: ${(props) =>
    props.disabled !== undefined && props.disabled ? 'not-allowed' : 'pointer'};
  pointer-events: ${(props) =>
    props.disabled !== undefined && props.disabled ? 'none' : 'auto'};
`;

const Title = styled.h2`
  color: #fff;
  font-weight: 300;
`;

const CardText = styled.span`
  color: #fff;
  font-weight: 300;
`;

const ParentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;

const Card: React.FC<CardProps> = ({
  title,
  text,
  backgroundColor,
  disabled,
  ...props
}) => {
  return (
    <ParentContainer>
      <StyledCard
        backgroundColor={backgroundColor}
        disabled={disabled}
        {...props}
      >
        <Title>{title}</Title>
        <CardText>{text} </CardText>
      </StyledCard>
    </ParentContainer>
  );
};

export default Card;
