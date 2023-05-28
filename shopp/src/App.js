import React from 'react';
import Header from './componets/Header';
import Users from './componets/Users';
import AddUser from './componets/AddUser';

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
    this.deleteUser = this.deleteUser.bind(this)
    this.editUser = this.editUser.bind(this)
  }
  
  render() {
    return (<div>
      <Header title="Список користувачів" />
      <main>
        <Users users={this.state.users} onDelete={this.deleteUser} onEdit={this.editUser}/>
      </main>
      <aside>
        <AddUser onAdd={this.addUser}/>
      </aside>
    </div>)
  }

  deleteUser(id) {
    this.setState({
      users: this.state.users.filter((el) => el.id !== id)
    })
  }

  editUser(user) {
    let allUsers = this.state.users
    allUsers[user.id - 1] = user

    this.setState({ users: [] }, () => {
      this.setState({ users: [...allUsers] })
    })
  }

  addUser(user) {
    const id = this.state.users.length + 1
    this.setState({ users: [...this.state.users, {id, ...user}] })
  }

}

export default App