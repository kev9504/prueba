import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './components/home/home';
import TicketForm from './containers/Tickets/TicketForm/TicketForm';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <Route exact path='/' 
        render={()=>(<Home />)}/>
        <Route exact path='/:id/edit'
        render={()=>(<TicketForm />)}
        />
      </div>
      </Router>
    );
  }
}

export default App;
