import React from 'react';
import Footer from './componets/Footer';
import Header from './componets/Header'
import Items from './componets/Items';
import Categories from './componets/Categories';
import ShowFullItem from './componets/ShowFullItem';


class  App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      orders: [],
      currentItems: [],
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
          category: 'light',
          price: '25.00'
        }

      ],
      showFullItem: false,
      fullItem: {}
    }
    this.state.currentItems = this.state.items
    this.addToOrder = this.addToOrder.bind(this) //підключення метода
    this.deleteOrder = this.deleteOrder.bind(this)
    this.chooseCategory = this.chooseCategory.bind(this)
    this.onShowItem = this.onShowItem.bind(this)
  }
  
  render() {
    return (
      <div className='wrapper'>
        <Header orders={this.state.orders} onDelete={this.deleteOrder} />
        <Categories chooseCategory={this.chooseCategory}/>
        <Items onShowItem={this.onShowItem} items={this.state.currentItems} onAdd={this.addToOrder} />

        {this.state.showFullItem && <ShowFullItem onShowItem={this.onShowItem} onAdd={this.addToOrder} item={this.state.fullItem}/>}
        <Footer onClick={() => this.props.onDelete(this.props.icon.id)}/>
      </div>
    );
  }

  onShowItem(item) {
    this.setState({fullItem: item})
    this.setState({showFullItem: !this.state.showFullItem})
  }

  chooseCategory(category) {
    if (category === 'all') {
      this.setState({ currentItems: this.state.items})
      return
    } 

    this.setState({
      currentItems: this.state.items.filter(el => el.category === category )
    })
  }

  deleteOrder(id)  {
    this.setState({orders: this.state.orders.filter(el => el.id !== id)})
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
