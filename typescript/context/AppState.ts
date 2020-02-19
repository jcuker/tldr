import React from 'react';
import { IColors, DARK_COLORS } from '../constants';

export interface IAppState {
    colors: IColors;
}

export const DEFAULT_APP_STATE: IAppState = {
    colors: DARK_COLORS
}

export const AppStateContext = React.createContext(DEFAULT_APP_STATE);
