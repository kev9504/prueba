import React, {Component} from 'react';
import Ticket from '../../components/ticket/ticket';
import axios from 'axios';

class Tickets extends Component{
    state={
        tickets:[]
    }
    componentWillMount(){
        this.getTickets();
    }
    getTickets=()=>{
        axios({
        url:'https://demo.masterdevel.com/api/tickets',
        method: 'get',
        }).then(res=>{
        const tickets=res.data.data.map(ticket=>(
            <Ticket 
            ticket={ticket}
            key={ticket.id}
            deleteTicketHandler={this.deleteTicketHandler}
            />
            ));
        this.setState({tickets:tickets});
        })
        .catch(err=>console.log(err));
    }
    deleteTicketHandler=(id)=>{
        const confirmation=window.confirm('continue?');
        if(confirmation){
            axios({
                url:`https://demo.masterdevel.com/api/tickets/${id}`,
                method: 'delete',
            }).then(res=>console.log(res))
            .catch(err=>console.log(err));
        }
    }
    render(){
        return(
            <div>
            {this.state.tickets}
            </div>
            );
    }
}

export default Tickets;
