
import React from "react";
import { useEffect } from "react";
import ContactForm from "./Form/ContactForm";
import Filter from "./Filter/Filter";
import ContactsList from "./ContactsList/ContactsList";
import { Container, MainTitle, SecondTitle } from "./Container.styled";
import { useDispatch } from "react-redux";
import { fetchContacts, addContact, removeContact } from "redux/contacts/contactsOperations";
import { setFilter } from "redux/filter/filterAction";
import { getFilter } from "redux/filter/filterSelectors";
import { useSelector } from 'react-redux/es/exports';
import { getFilteredContacts, getState } from "redux/contacts/contactsSelectors";




export default function App() {
  const dispatch = useDispatch();
  const contacts = useSelector(getFilteredContacts);
  const filter = useSelector(getFilter);
  const { loading, error } = useSelector(getState);


 useEffect(() => {
        dispatch(fetchContacts())
    }, [dispatch]);

  
  const onAddContact = (contact) => {
        const action = addContact(contact);
        dispatch(action);
  }
  
const onRemoveContact = (id) => {
        const action = removeContact(id);
        dispatch(action);
    }

  const handleChange = e => {
    const { value } = e.target;
    dispatch(setFilter(value));
  };

 
      
      
    return (
        <Container>
           <MainTitle>Phonebook</MainTitle>
        <ContactForm onSubmit={onAddContact} />
        
          <SecondTitle>Contacts</SecondTitle>
        <Filter value={filter} onChange={handleChange}/>
         {contacts.length > 0 && (
          <ContactsList contacts={contacts} onDeleteContact={onRemoveContact} />
        )}
        {loading && <p>...loading</p>}
        {error && <p>oops, something went wrong</p>}
          </Container>
      );

    }
