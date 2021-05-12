import { createAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const addContact = createAction('phonebook/Add', (name, number) => {
    return {
        payload: {
         id: uuidv4(),
         name,
         number,
    }
    }
})

// const addContact = (name, number) => ({
//     type: types.ADD,
//     payload: {
//          id: uuidv4(),
//         name,
//         number,
//     }
// })

const deleteContact = createAction('phonebook/Delete')

// const deleteContact = idx => ({
//     type: types.DELETE,
//     payload: idx
// })

const changeFilter = createAction('phonebook/Get')

// const changeFilter = value => ({
//     type: types.GET_FILTERED_CONTACTS,
//     payload: value
// })


export { addContact, deleteContact, changeFilter };