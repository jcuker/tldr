import { IAppState } from "./context/AppState";

// Colors
export type t = 'ArticleCardBackground'
    | 'ArticleCardHeaderBackground'
    | 'MainPageBackground';

export type IColors = {
    [key in t]: string;
}

export const DARK_COLORS: IColors = {
    ArticleCardBackground: '#607D8B',
    ArticleCardHeaderBackground: '#9ECAFF',
    MainPageBackground: '#37474F'
};

export const LIGHT_COLORS: IColors = {
    ...DARK_COLORS
}