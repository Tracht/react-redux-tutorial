import { ADD_ARTICLE } from "../constants/action-types";

export function addArticle(payload) {
  return { type: ADD_ARTICLE, payload };
}

export function getData() {
  return { type: "DATA_REQUESTED" };
}


// NOTE!
// You can notice that the type property is a string. 
// Strings are prone to typos and duplicates and 
// for this reason it's better to declare actions as constants. 
// So we will create a new folder for them (constants)
// And we will store the constants in a file called action-types.js