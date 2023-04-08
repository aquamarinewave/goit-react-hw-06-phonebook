import { useEffect, useState } from 'react';
import { Container } from './App.styled';

import Section from './Section/Section';
import ContactForm  from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

// {
//   contacts: [],
//   filter: ""
// }

// Створи сховище з configureStore()
// Використовуй функцію createSlice()
// Створи дії збереження та видалення контакту, а також оновлення фільтра
// Зв'яжи React-компоненти з Redux-логікою за допомогою хуків бібліотеки react-redux.
// Використай бібліотеку Redux Persist для збереження масиву контактів у локальному сховищі


const App = () => {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(window.localStorage.getItem('contacts')) ?? []
  });
  const [filter, setFilter] = useState('');

  const formSubmitHandler = newContact => {
    const normName = newContact.name.toLowerCase();
    contacts.find(({ name }) => name.toLowerCase() === normName)
      ? alert(newContact.name + "is already in contscts")
      : setContacts([...contacts, newContact]);
  };

  const deleteRecipe = contactId => {
    setContacts(contacts.filter(contact => contact.id !== contactId));
  };

  const changeFilter = (event) => {
    setFilter(event.currentTarget.value);
  }
  
  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  
    const normalizedFilter = filter.toLowerCase();

    const visibleContacts = contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter))

    return (
      <Container>
        <Section title="Phonebook">
          <ContactForm addNewContact={formSubmitHandler} />
        </Section>
        <Filter value={filter} onChange={changeFilter} /> 
        <Section title="Contacts">
          <ContactList options={visibleContacts} onDelete={deleteRecipe} />
        </Section>
      </Container>
  );
  
};


export default App;