import { ADD_ITEM } from "./actions.constants";

const GlobalReducer = (state, action) => {
  switch (action.type) {
    case ADD_ITEM: {
      return { activeItems: [...state.activeItems].concat(action.payload) };
    }
    default:
      return state;
  }
};
export default GlobalReducer;
