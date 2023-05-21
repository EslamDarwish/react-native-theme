import {ViewProps} from 'react-native/types';
import {ITheme} from '.';
import {SpaceProps, ColorProps, FlexboxProps, LayoutProps} from 'styled-system';

type SpaceType = Leaves<ITheme['space']>;
type ColorType = Leaves<ITheme['colors']>;
type FontSizeType = Leaves<ITheme['fontSizes']>;
type FontWeightType = Leaves<ITheme['fontWeights']>;
type BorderWidthsType = Leaves<ITheme['borderWidths']>;
type RadiiType = Leaves<ITheme['radii']>;
type ShadowsType = Leaves<ITheme['shadows']>;
type OpacityType = Leaves<ITheme['opacity']>;
type SizesType = Leaves<ITheme['sizes']>;

export interface IColorHues {
  50?: string;
  100?: string;
  200?: string;
  300?: string;
  400?: string;
  500: string;
  600?: string;
  700?: string;
  800?: string;
  900?: string;
}

export interface ISpaceProps extends SpaceProps {
  m?: SpaceType;
  mt?: SpaceType;
  mr?: SpaceType;
  mb?: SpaceType;
  ml?: SpaceType;
  mx?: SpaceType;
  my?: SpaceType;
  p?: SpaceType;
  pt?: SpaceType;
  pr?: SpaceType;
  pb?: SpaceType;
  pl?: SpaceType;
  px?: SpaceType;
  py?: SpaceType;
}

export interface IColorProps extends ColorProps {
  color?: ColorType;
  bg?: ColorType;
}

export interface IFlexboxProps extends FlexboxProps {}

export interface ITypographyProps extends ISpaceProps, IColorProps {
  text?: string;
  fontWeight?: FontWeightType;
  fontSize?: FontSizeType;
}

export interface ILayoutProps extends LayoutProps {
  width?: SizesType;
  height?: SizesType;
  sizes?: SizesType;
}
export interface IBoxProps
  extends ViewProps,
    ILayoutProps,
    ISpaceProps,
    IColorProps,
    IFlexboxProps {
  borderWidth?: BorderWidthsType;
  borderRadius?: RadiiType;
  shadow?: ShadowsType;
  opacity?: OpacityType;
}

export type Join<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}${'' extends P ? '' : '.'}${P}`
    : never
  : never;

export type Leaves<T> = T extends object
  ? {[K in keyof T]-?: Join<K, Leaves<T[K]>>}[keyof T]
  : '';

export type TypeOrNull<T> = T | null;

export type TypeOrUndefined<T> = T | undefined;
