import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contacts/contactsSlice';
import { filterReducer } from './filter/filterReduser';

export const store = configureStore({
    reducer: {
        contacts: contactsReducer,
        filter: filterReducer
    }
});

