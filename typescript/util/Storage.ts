import { IAppState, DEFAULT_APP_STATE } from "../context/AppState";

export async function getAppState(): Promise<IAppState> {
    return DEFAULT_APP_STATE;
}