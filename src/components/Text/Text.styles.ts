import styled from 'styled-components/native';
import {ITextProps} from './Text.props';
import {color, compose, space, typography} from 'styled-system';

export const StyledText = styled.Text<ITextProps>`
  ${compose(typography, color, space)}
`;
