import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout';
import { Card } from './Card.styled';

import { useState, useEffect} from 'react';

import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';



const localStorageKey = 'quiz-contacts';

export const App = () => { 
const [contacts, setContacts] = useState(()=> {
  const savedContacts = JSON.parse(localStorage.getItem(localStorageKey));
    if (savedContacts != null) {
      return savedContacts
    }
    return []
});
const [filter, setFilter] = useState('');



useEffect(()=>{ localStorage.setItem(localStorageKey, JSON.stringify(contacts));}, [contacts])


const addContact = (newContact) => { 
  if (
    contacts.find(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    )
  ) {
    return alert(`${newContact.name} is already in contacts`);
  }

  if (
    contacts.find(contact => contact.number === newContact.number)
  ) {
    return alert(`${newContact.number} is already in contacts`);
  }

  setContacts(prevState => [...prevState, newContact])
};


const handleDelete = (itemId) => { 
  setContacts(prevState => prevState.filter(contact => contact.id !== itemId))
}

const visibleContact = contacts.filter(contact =>
  contact.name.toLowerCase().includes(filter.toLowerCase())
);


return (
  <Layout>
    <Card>
      <h2>Phonebook</h2>
      <ContactForm onAdd={addContact} />
      <h2>Contacts</h2>
      <Filter filteredItems={filter} onFind={(filtered) =>   setFilter(filtered)} />
      <ContactList contacts={visibleContact} onDelete={handleDelete} />
    </Card>
    <GlobalStyle />
  </Layout>
);
}