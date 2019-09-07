import React from 'react';
import Contact from './components/Contact';
import Header from './components/Header';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Contact name="John Doe" email="jdoe@gmail.com" phone="555-555-5555" />
      <Contact name="Kane Smith" email="kane@gmail.com" phone="333-333-3333" />
    </div>
  );
}

export default App;
