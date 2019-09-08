import React, { Component } from 'react';

const Context = React.createContext();
const reducer = (state, action) => {
  switch (action.type) {
    case 'DELETE_CONTACT':
      console.log(state);
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        )
      };
    default:
      return state;
  }
};

export class Provider extends Component {
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
    ],
    dispatch: action => {
      this.setState(state => reducer(state, action));
    }
  };
  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
