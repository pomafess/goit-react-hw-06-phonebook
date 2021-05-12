import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

// import actions from './phonebook-actions';

const contacts = createReducer([], {
    'phonebook/Add': (state, {payload}) => [...state, payload],
    'phonebook/Delete': (state, {payload}) => state.filter((_, idx) => idx !== payload)
})

// const contacts = (state = [], { type, payload }) => {
//     switch (type) {
//         case types.ADD:
//             return [...state, payload];
        
//         case types.DELETE:
//             return state.filter((_, idx) => idx !== payload)
            
//         default:
//             return state
//     }
// };

const value = createReducer('', {
    'phonebook/Get': (_, {payload}) => payload,
})

// const value = (state = '', { type, payload }) => {
//      switch (type) {
//          case types.GET_FILTERED_CONTACTS:
//              return payload;
         
//         default:
//             return state
//     }
// };

 
const bookReducer = combineReducers({
    contacts,
    value
});

export default bookReducer