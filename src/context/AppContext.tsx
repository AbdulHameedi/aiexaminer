import { createContext, Reducer, useMemo, useReducer } from "react";
import { UploadResponseProps } from "../types/api";

export interface State {
  isOpen: boolean;
  uploadResponse?: UploadResponseProps;
  isAuthenticated: boolean;
  user?: {
    name?: string;
    email?: string;
  };
  userName?: string;
  userEmail?: string;
  userToken?: string;
}
interface Action {
  type: string;
  payload?:
    | string
    | object
    | boolean
    | File[]
    | null
    | string[]
    | UploadResponseProps
    | null;
  optionKey?: keyof State;
}
type Dispatch = (action: Action) => void;
interface AppProviderProps {
  children: React.ReactNode;
}
const initialState: State = {
  isOpen: false,
  isAuthenticated: JSON.parse(localStorage.getItem("isAuthenticated") || "false"),
  user: JSON.parse(localStorage.getItem("user") || "null"),
  //   uploadResponse: [],
};
export const AppStateContext = createContext<State | undefined>(undefined);
export const AppDispatchContext = createContext<Dispatch | undefined>(
  undefined
);
const DashboardReducer = (state: State, action: Action) => {
  const { type, optionKey, payload } = action;
  switch (type) {
    case "SET_SELECTED":
      if (optionKey == "isAuthenticated") {
        localStorage.setItem("isAuthenticated", JSON.stringify(payload));
      }
      if (optionKey == "user") {
        localStorage.setItem("user", JSON.stringify(payload));
      }
      return optionKey ? { ...state, [optionKey]: payload } : state;

    default:
      return state;
  }
};
export const AppProvider = ({ children }: AppProviderProps) => {
  const [state, dispatch] = useReducer<Reducer<State, Action>>(
    DashboardReducer,
    initialState
  );
  const memoizedState = useMemo(() => state, [state]);
  return (
    <AppStateContext.Provider value={memoizedState}>
      <AppDispatchContext.Provider value={dispatch}>
        {children}
      </AppDispatchContext.Provider>
    </AppStateContext.Provider>
  );
};
