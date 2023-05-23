import React from 'react';
import User from './User';

class Users extends React.Component {
 constructor(props) {
    super(props)
    this.state = {
      users: [
        {
          id: '1',
          firstname: 'Bob',
          lastname: 'Marley',
          bio: 'Loren ipsum dolor sit amet consectetur, adipisicing elit. Repella',
          age: '40',
          isHappy: true
        },
        {
          id: '2',
          firstname: 'John',
          lastname: 'Doe',
          bio: 'Loren ipsum dolor sit amet consectetur, adipisicing elit. Repella',
          age: '22',
          isHappy: false
        }
      ]
    }
  }

  render() {
      if(this.state.users.length > 0)
        return (<div>
          {this.state.users.map((el) => (
            <User  key={el.id} user={el}/>
          ))}
        </div>)
      else
          return (<div className='user'>
              <h3>Користувачів немає</h3>
          </div>)
  }
}

export default Users