import { List } from './ContactList.styled';
import { ContactListItem } from '../ContactListItem/ContactListItem';
import { useSelector } from 'react-redux';
import { getContacts, getFilter } from '../../redux/selectors';
import { useMemo } from 'react';

export const ContactList = () => {
    
    const contacts = useSelector(getContacts);
    const filterContacts = useSelector(getFilter);

    const getVisibleContacts = () => {
        if (!filterContacts) {
            return contacts;
        }

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterContacts.toLowerCase()));
    };
    
    const visibleContacts = useMemo(getVisibleContacts, [contacts, filterContacts]);

    return (
        <List>
            {visibleContacts.map(contact => (
                <ContactListItem key={contact.id} contact={contact} />
            ))}
        </List>
    )
}





// const ContactList = ({ options, onDelete } ) => {
//     return (
//         <List>
//             {options.map(option => (
//             <ListItem key={option.id}>
//                     <span>{option.name}: </span><PhoneNumber>{option.number}</PhoneNumber>
//                     <ContsctBtn type="button" onClick={() => onDelete(option.id)}>Delete</ContsctBtn>
//             </ListItem>
//             ))}
//         </List>
//     )
// }
// export default ContactList; 
