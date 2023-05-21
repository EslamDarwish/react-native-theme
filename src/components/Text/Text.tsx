import React from 'react';
import {ExtractProps} from '../';
import {StyledText} from './Text.styles';

const Text = (props: ExtractProps<typeof StyledText>): JSX.Element => {
  return <StyledText {...props}>{props.children}</StyledText>;
};

export default Text;
