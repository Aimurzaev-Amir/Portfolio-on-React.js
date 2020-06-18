import { createStore, combineReducers} from "redux";
import worksReducer from "./WorksReducer";
import articlesReducer from "./ArticlesReducer"

let reducers = combineReducers({
  works: worksReducer,
  articles: articlesReducer,
});

let store = createStore(reducers);

window.store = store;

export default store;
