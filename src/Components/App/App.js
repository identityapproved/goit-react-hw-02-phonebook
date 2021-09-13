import ContactsForm from 'Components/ContactsForm/ContactsForm';
import { ContactsList } from 'Components/ContactsList/ContactsList';
import { Container } from 'Components/Container/Container';
import React, { Component } from 'react';

export default class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  addContact = contact => {
    this.setState(prev => ({ contacts: [...prev.contacts, contact] }));
  };

  removeContact = id => {
    this.setState(prev => ({
      contacts: prev.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    return (
      <>
        <Container title="Phonebook">
          <ContactsForm addContact={this.addContact} />
        </Container>

        <Container title="Contacts">
          <ContactsList contacts={this.state.contacts} remove={this.removeContact} />
        </Container>
      </>
    );
  }
}
