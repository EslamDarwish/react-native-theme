import theme from './themeOne';

export type Theme = typeof theme & {fontConfig: any};

export interface ICustomTheme {}

export interface ITheme extends ICustomTheme, Omit<Theme, keyof ICustomTheme> {}

export {theme};
