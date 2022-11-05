import { getContacts, newContact, deleteContact } from "components/ContactsApi/Api";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchContacts = createAsyncThunk(
    "contacts/fetch",
    async(_, thunkApi) => {
        try {
            const data = await getContacts();
            return data;
        } catch (error) {
            return thunkApi.rejectWithValue(error);
        }
    }
);
    
export const addContact = createAsyncThunk(
    "contacts/add",
    async (data, { rejectWithValue }) => {
        try {
            const result = await newContact(data);
            console.log(data);
            return result;
        } catch (error) {
            return rejectWithValue(error);
        }
    },
    {
        condition: ({name}, { getState })=> {
            const { contacts } = getState();
            const normalizedName = name.toString().toLowerCase();
            if (contacts.items.find(item => item.name.toString().toLowerCase() === normalizedName)) {
                alert(`${name} is already exist`)
                return false;
            }
        }
    }
);

export const removeContact = createAsyncThunk(
    "contacts/remove",
    async(id, {rejectWithValue}) => {
        try {
            deleteContact(id);
            return id;
        } catch(error) {
            return rejectWithValue(error);
        }
    }
)