import React from 'react';
import { AiFillRest, AiFillTool } from "react-icons/ai";


class User extends React.Component {
    user = this.props.user
    render() {
        return (
            <div className='user'>
                <AiFillRest className='delete-icons'/>
                <AiFillTool className='edit-icons'/>
                <h3>{this.user.firstname} {this.user.lastname}</h3>
                <p>{this.user.bio} </p>
                <p>Вік: {this.user.age}</p>
                <b>{this.user.isHappy ? 'Щясливий :)' : 'Недуже :('}</b>    
            </div>
        )   
    }
}

export default User