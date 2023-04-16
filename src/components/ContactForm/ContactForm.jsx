import { Formik } from 'formik';
import { FormContainer, Label, Input, Button } from './ContactForm.styled';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contactsSlice';
import { getContacts } from '../../redux/selectors';

const nameContact = nanoid();
const numberContact = nanoid();

export const ContactForm = () => {

  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    
    const normName = values.name.toLowerCase();
    if (contacts.find(({ name }) => name.toLowerCase() === normName)) {
      alert(`${values.name} is already in contacts!`);
      return;
    }
  
    dispatch(addContact(values));
    actions.resetForm();
    }
    
    return (
      <Formik initialValues={{
        name: '',
        number: '',
      }}
              onSubmit={handleSubmit}>
          <FormContainer autoComplete='off'>
          <Label
            htmlFor={nameContact}
            >
              Name
            </Label>
            <Input
                id={nameContact}
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
            />
            <Label
              htmlFor={numberContact}
            >
              Number
            </Label>
          <Input
              id={numberContact}
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
            <Button
              type='submit'
            >
              Add contact
            </Button> 
          </FormContainer>
        </Formik>
    )  
}





// const Phonebook = ({addNewContact}) => {

//   const handleSubmit = (values, { resetForm }) => {
//     addNewContact({ ...values, id: nanoid() });
//     resetForm();
//   };

//   return (
//         <Formik initialValues={initialValues} onSubmit={handleSubmit}>
//           <FormContainer autoComplete='off'>
//           <Label
//             htmlFor={nameContact}
//             >
//               Name
//             </Label>
//             <Input
//                 id={nameContact}
//                 type="text"
//                 name="name"
//                 pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//                 title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//                 required
//             />
//             <Label
//               htmlFor={numberContact}
//             >
//               Number
//             </Label>
//           <Input
//               id={numberContact}
//               type="tel"
//               name="number"
//               pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//               title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//               required
//             />
//             <Button
//               type='submit'
//             >
//               Add contact
//             </Button> 
//           </FormContainer>
//         </Formik>
//     )  
// }
// export default Phonebook;
