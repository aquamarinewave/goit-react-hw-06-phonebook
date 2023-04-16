// import { useEffect, useState } from 'react';
import { Container } from './App.styled';

import Section from './Section/Section';
import { ContactForm }  from './ContactForm/ContactForm';
import { ContactList} from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

const App = () => {

    return (
      <Container>
        <Section title="Phonebook">
       <ContactForm  />  
        </Section>
        <Filter />  
        <Section title="Contacts">
          <ContactList />  
        </Section>
      </Container>
  );
  
};

export default App;
