// import { ADD_ARTICLE } from '../constants/action-types';
import { ADD_ARTICLE } from '../actions/index';
import { initialState } from './initialState';
import { combineReducers } from 'redux';

// JavaScript 
export const RootState = {
  data: DataState
};

export const dataReducer = (state = initialState, action) => {
  switch (action.type) {

    case action.ADD_ARTICLE:
      return Object.assign({}, state, {
        articles: state.articles.concat(action.payload)
      });
  
    default: 
      return state;  

  }
};

export const rootReducer = combineReducers({
  data: dataReducer
});

// NOTE!
// we must use code in lines 9-10 because we need to create a new state
// the old state cannot be modified, due to redux rules of immutability
// as such, we must return a new JS object

// NOTE 2: 
// The approach above ensures that the intial state is untouched
// And the resulting state is just a copy of the initial state
// The two key points to avoid mutations in redux: 
// 1) use concat, slice, or the spread operator for arrays
// 2) use Object.assign or object spreads for objects 