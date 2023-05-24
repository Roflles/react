import React from 'react';
import Header from './componets/Header';
import Users from './componets/Users';


class App extends React.Component {
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
    this.addUser = this.addUser.bind(this)
  }
  
  render() {
    return (<div>
      <Header title="Список користувачів" />
      <main>
        <Users users={this.state.users} />
      </main>
      <aside>
        <AddUser />
      </aside>
    </div>)
  }

}

addUser(user) {
  const id = this.state.users.lenght + 1
  this.setState({ users: [...this.state.users, {id, ...user}] })
}

export default App