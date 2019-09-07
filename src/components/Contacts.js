import React, { Component } from 'react';
import Contact from './Contact';

class Contacts extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: 'Rakesh Kumar',
        email: 'rkakumar85@gmail.com',
        phone: '111-111-1111'
      },
      {
        id: 2,
        name: 'Surabhi Bramhadev',
        email: 'surabhi.b0@gmail.com',
        phone: '222-222-2222'
      },
      {
        id: 3,
        name: 'Ishitha',
        email: 'Ishitha@gmail.com',
        phone: '333-333-3333'
      }
    ]
  };
  render() {
    const { contacts } = this.state;
    return (
      <div>
        {contacts.map(contact => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </div>
    );
  }
}

export default Contacts;
