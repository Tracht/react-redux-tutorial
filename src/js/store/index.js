import { createStore, applyMiddleware } from "redux";
import rootReducer from '../reducers/index';
import { forbiddenWordsMiddleware } from '../middleware';

const store = createStore(
  rootReducer,
  applyMIddleWare(forbiddenWordsMiddleware)
  );

export default store; 
