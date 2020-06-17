import { createStore, combineReducers} from "redux";
import worksReducer from "./WorksReducer";

let reducers = combineReducers({
  works: worksReducer,
});

let store = createStore(reducers);

window.store = store;

export default store;
