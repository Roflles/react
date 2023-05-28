import React from 'react';
import { AiFillRest, AiFillTool } from "react-icons/ai";
import AddUser from './AddUser';


class User extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            editForm: false
        }
    }
    user = this.props.user
    render() {
        return (
            <div className='user'>
                <AiFillRest onClick={() => this.props.onDelete(this.user.id)} className='delete-icons'/>
                <AiFillTool onClick={() => {
                    this.setState({
                        editForm: !this.state.editForm
                    })
                }} className='edit-icons'/>
                <h3>{this.user.firstname} {this.user.lastname}</h3>
                <p>{this.user.bio} </p> 
                <p>Вік: {this.user.age}</p>
                <b>{this.user.isHappy ? 'Щясливий :)' : 'Недуже :('}</b>

                {this.state.editForm && <AddUser user={this.user} onAdd={this.props.onEdit} />}
            </div>
        )   
    }
}

export default User