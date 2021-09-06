import { combineReducers } from "redux";
import game_slice from "./slices/game.slice";


const rootReducer = combineReducers({
  game: game_slice
});

export default rootReducer;
