import React from 'react';
import Footer from './componets/Footer';
import Header from './componets/Header'
import Items from './componets/Items';


class  App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      orders: [],
      items: [
        {
          id: 1,
          title: 'Стул',
          img: '6258596915.jpg',
          desc: 'Loren ipsum dolor sit amet, consectetur adipisicing.',
          category: 'chairs',
          price: '49.99'
        },
        {
          id: 2,
          title: 'Стіл',
          img: 'bostona.jpg',
          desc: 'Loren ipsum dolor sit amet, consectetur adipisicing.',
          category: 'tables',
          price: '149.99'
        },
        {
          id: 3,
          title: 'Диван',
          img: 'MG_0569-1500x1000.jpg',
          desc: 'Loren ipsum dolor sit amet, consectetur adipisicing.',
          category: 'sofa',
          price: '549.99'
        },
        {
          id: 4,
          title: 'Лампа',
          img: '33665363245784512456.jpg',
          desc: 'Loren ipsum dolor sit amet, consectetur adipisicing.',
          category: 'Light',
          price: '25.00'
        }

      ]
    }
    this.addToOrder = this.addToOrder.bind(this) //підключення метода 
  }
  
  render() {
    return (
      <div className='wrapper'>
        <Header orders={this.state.orders}/>
        <Items items={this.state.items} onAdd={this.addToOrder} />
        <Footer />
      </div>
    );
  }
  
  addToOrder(item) {    //перевірка на додавання обєкта
    let isInArray = false
    this.state.orders.forEach(el => {
      if(el.id === item.id)
        isInArray = true
    })
    if(!isInArray) //додавання обєкта
      this.setState({ orders: [ ...this.state.orders, item ] })
  }
  
}

export default App;
