import { Component } from "react";

export class App extends Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: ""
  };

  addContact = (newContact) => {
    this.setState((prevState) => ({
      contacts: [...prevState.contacts, newContact]
    }));
  };

  deleteContact= (id) =>{
    this.setState((prevState)=>({contacts: prevState.contacts.filter((contact)=>contact.id !== id)}))
  }

  filterChange = e => {
    this.setState
  }

  filteredContact = (text)=>{

  }

  render() {
    return (
      <>
        <Form addContact={this.addContact} />
        <ContactsList contacts={this.state.contacts} />
      </>
    );
  }
}

