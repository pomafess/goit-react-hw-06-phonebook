import { combineReducers } from 'redux';
import types from './phonebook-types';

const contacts = (state = [], { type, payload }) => {
    switch (type) {
        case types.ADD:
            return [...state, payload];
        
        case types.DELETE:
            return state.filter(({id}) => id !== payload)
            
        default:
            return state
    }
};

const value = (state = '', { type, payload }) => {
     switch (type) {
         case types.GET_FILTERED_CONTACTS:
             return payload;
         
        default:
            return state
    }
};

const name = (state = '', action) => {
    return state
};

const number = (state = '', action) => {
    return state
};
 
const bookReducer = combineReducers({
    contacts,
    value,
    name,
    number
});

export default bookReducer