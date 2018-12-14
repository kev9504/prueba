import React, {Component} from 'react';
import './TicketForm.css';
import { Link,withRouter } from 'react-router-dom';
import axios from 'axios';
class TicketForm extends Component{
    state={
        title:'',
        topic:'',
        description:'',
    }
    componentDidMount(){
        this.getTicket(this.props.match.params.id);
    }
    getTicket=(id)=>{
        axios({
        url:`https://demo.masterdevel.com/api/tickets/${id}`,
        method: 'get',
        }).then(res=>{
            const ticket=res.data.data;
            this.setState({
                title:ticket.title,
                topic:ticket.topic,
                description:ticket.description,
            });
        })
        .catch(err=>console.log(err));
    }
    changeHandler =(e)=>{
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            [name]: value
        });
    }
    submitFormHandler=(e, state,id=this.props.match.params.id)=>{
        axios({
            url:`https://demo.masterdevel.com/api/tickets/${id}`,
            method: 'put',
            data:state,
        }).then(res=>console.log(res));
        e.preventDefault();
    }
    render(){
        return(
            <div>
                <header className="App-header">
                    <h1>Edit Ticket</h1>
                </header>
                <div className="ticket-box">
                    <form onSubmit={(e, data)=>this.submitFormHandler(e, this.state)}>
                    <input 
                    type="text" 
                    placeholder="Title"
                    value={this.state.title}
                    name="title"
                    onChange={(e)=>this.changeHandler(e)}
                    />
                    <br/>
                    <input 
                    type="text" 
                    placeholder="Topic"
                    value={this.state.topic}
                    name="topic"
                    onChange={(e)=>this.changeHandler(e)}/>
                    <br />
                    <textarea 
                    placeholder="description"
                    value={this.state.description}
                    name="description"
                    onChange={(e)=>this.changeHandler(e)}/>
                    <br/>
                    <input 
                    type="submit"
                    value="update"/>
                    </form>
                    <Link to='/'>Home</Link>
                </div>
            </div>
            );
    }
}
export default withRouter(TicketForm);