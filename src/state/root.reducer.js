import { combineReducers } from "redux";
import joker_reducer from "./slices/joker.slice";

const rootReducer = combineReducers({
  joker: joker_reducer
});

export default rootReducer;
