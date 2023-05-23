import React from 'react';
import Header from './componets/Header';
import Users from './componets/Users';

class App extends React.Component {
  
  render() {
    return (<div>
      <Header title="Список користувачів" />
      <main>
        <Users />
      </main>
      <aside></aside>
    </div>)
  }

}

export default App