import React from 'react';
import Tickets from '../../containers/Tickets/Tickets';
const home=(props)=>{
    return(<div>
    <header className="App-header">
        <h1>Ticket Order</h1>
        </header>
        <div>Search Bar</div>
    <Tickets />
    </div>);
};

export default home;