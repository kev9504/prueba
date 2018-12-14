import React from 'react';
import './ticket.css';
import { Link } from 'react-router-dom';
const ticket=(props)=>{
    return(
        <div className="ticket-box">
        <div>{props.ticket.created_at}</div>
        <h2>{props.ticket.title}</h2>
        <hr/>
        <span onClick={()=>props.deleteTicketHandler(props.ticket.id)}>Delete</span>
        <Link to={`/${props.ticket.id}/edit`}>Edit</Link>
        </div>);
};

export default ticket;