import React from 'react';
import {ExtractProps} from '@utils';
import {StyledCard} from './Card.styles';

const Card = (props: ExtractProps<typeof StyledCard>): JSX.Element => {
  return <StyledCard {...props}>{props.children}</StyledCard>;
};

export default Card;
