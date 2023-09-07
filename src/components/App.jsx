import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout';
import { Card } from './Card.styled';

import { Component } from 'react';

import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

const localStorageKey = 'quiz-contacts';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidUpdate(prevProps, prevState) {
    const { contacts: prevContacts } = prevState;
    const { contacts: nextContacts } = this.state;
    if (prevContacts !== nextContacts) {
      localStorage.setItem(localStorageKey, JSON.stringify(nextContacts));
    }
  }

  componentDidMount() {
    const savedContacts = JSON.parse(localStorage.getItem(localStorageKey));
    if (savedContacts != null) {
      this.setState({ contacts: savedContacts });
    }
  }

  findContacts = filtered => {
    this.setState({
      filter: filtered,
    });
  };

  addContact = newContact => {
    if (
      this.state.contacts.find(
        contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
      )
    ) {
      return alert(`${newContact.name} is already in contacts`);
    }

    if (
      this.state.contacts.find(contact => contact.number === newContact.number)
    ) {
      return alert(`${newContact.number} is already in contacts`);
    }

    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  handleDelete = itemId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== itemId),
    }));
  };

  render() {
    const { filter, contacts } = this.state;

    const visibleContact = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
      <Layout>
        <Card>
          <h2>Phonebook</h2>
          <ContactForm onAdd={this.addContact} />
          <h2>Contacts</h2>
          <Filter filteredItems={filter} onFind={this.findContacts} />
          <ContactList contacts={visibleContact} onDelete={this.handleDelete} />
        </Card>
        <GlobalStyle />
      </Layout>
    );
  }
}
