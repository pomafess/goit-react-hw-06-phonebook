import types from './phonebook-types';
import { v4 as uuidv4 } from 'uuid';

const addContact = (name, number) => ({
    type: types.ADD,
    payload: {
         id: uuidv4(),
        name,
        number,
    }
})

const deleteContact = idx => ({
    type: types.DELETE,
    payload: idx
})

const changeFilter = value => ({
    type: types.GET_FILTERED_CONTACTS,
    payload: value
})


export { addContact, deleteContact, changeFilter };