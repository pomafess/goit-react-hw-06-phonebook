import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import bookReducer from './phonebook/phonebook-reducer'

const rootReducer = combineReducers({
   phonebook: bookReducer
})

const store = createStore(rootReducer, composeWithDevTools());

export default store;
