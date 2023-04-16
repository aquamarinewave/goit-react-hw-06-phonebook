import React from 'react';
import { useDispatch } from "react-redux";
import { deleteContact } from '../../redux/contactsSlice';
import { ListItem, ContsctBtn, PhoneNumber } from './ContactListItem.styled';

export const ContactListItem = ({ contact: { id, name, number } }) => {
  
const dispatch = useDispatch();
   
  return (
    <ListItem>
          <span>{name}: </span><PhoneNumber>{number}</PhoneNumber>
          <ContsctBtn type="button" onClick={() => dispatch(deleteContact(id))}>Delete</ContsctBtn>
    </ListItem>
  );
};
