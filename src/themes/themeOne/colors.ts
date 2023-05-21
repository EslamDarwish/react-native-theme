import {baseColors} from '../base';
import {IColorHues, Leaves} from '../types';

const colors = {
  ...baseColors,
  // Derived colors
  danger: {} as IColorHues,
  error: {} as IColorHues,
  success: {} as IColorHues,
  warning: {} as IColorHues,
  muted: {} as IColorHues,
  primary: {} as IColorHues,
  info: {} as IColorHues,
  secondary: {} as IColorHues,
  light: {} as IColorHues,
  tertiary: {} as IColorHues,
};

colors.danger = colors.red;
colors.error = colors.rose;
colors.success = colors.emerald;
colors.warning = colors.orange;
colors.muted = colors.trueGray;
colors.primary = colors.blue;
colors.secondary = colors.pink;
colors.tertiary = colors.green;
colors.info = colors.lightBlue;
colors.light = colors.warmGray;

export default colors;
export type IColors = Leaves<typeof colors>;
