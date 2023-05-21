import {spacing} from './space';

const container = {
  '3xs': 224,
  '2xs': 256,
  xs: 320,
  sm: 384,
  md: 448,
  lg: 512,
  xl: 576,
  '2xl': 672,
};

const sizes = {
  ...spacing,
  container,
};

export type ISizes = keyof typeof sizes;
export default sizes;
