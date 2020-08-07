import { createStore, combineReducers } from "redux";
import worksReducer from "./WorksReducer";
import articlesReducer from "./ArticlesReducer";
import { reducer as formReducer } from "redux-form";
import AdminReducer from "./AdminReducer";

let reducers = combineReducers({
  works: worksReducer,
  articles: articlesReducer,
  form: formReducer,
  admin: AdminReducer,
});

let store = createStore(reducers);

window.store = store;

export default store;
