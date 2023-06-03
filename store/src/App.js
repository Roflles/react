import React from 'react';
import Footer from './componets/Footer';
import Header from './componets/Header'
import Items from './componets/Items';


class  App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
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
  }
  
  render() {
    return (
      <div className='wrapper'>
        <Header />
        <Items items={this.state.items}/>
        <Footer />
      </div>
    );
  } 
}

export default App;
