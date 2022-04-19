import { useReducer, createContext } from "react";
import { ADD_ITEM } from "./actions.constants";
import GlobalReducer from "./GlobalReducer";

const initialState = {
  activeItems: [],
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(GlobalReducer, initialState);
  const addItems = (item) => {
    dispatch({ type: ADD_ITEM, payload: item });
  };
  return (
    <GlobalContext.Provider
      value={{ activeItems: state.activeItems, addItems }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
