import React from "react";
import PropTypes from 'prop-types';
import { List, DeleteButton} from "./ContactsList.styled";

const ContactsList = ({ contacts, onDeleteContact}) => {
       return <List>
        {contacts.map(({ name, id, phone}) => (
            <li key={id}>{name}: {phone}
         <DeleteButton
          type="button"
          onClick={()=>onDeleteContact(id)}
        >
          Delete
        </DeleteButton>
            </li>
        ))}
            </List>
}


ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDeleteContact: PropTypes.func,
}

export default ContactsList;