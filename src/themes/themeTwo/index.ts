import borderWidths from './borders';
import colors from './colors';
import radii from './radius';
import shadows from './shadows';
import {spacing} from './space';
import typography from './typography';
import opacity from './opacity';
import sizes from './sizes';
const theme = {
  borderWidths,
  colors,
  radii,
  ...typography,
  space: spacing,
  sizes,
  shadows,
  opacity,
};

export default theme;
