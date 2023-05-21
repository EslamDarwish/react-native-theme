import styled from 'styled-components/native';
import {ICardProps} from './Card.props';
import {color, space, layout, position, border, compose} from 'styled-system';

export const StyledCard = styled.View<ICardProps>`
  ${compose(color, border, layout, position, space)}
`;
