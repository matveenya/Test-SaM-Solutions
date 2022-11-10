import React from "react"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Items from "./components/Items"

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      orders: [],
      items: [
        {
          id: 1,
          title: 'Gibson Les Paul Custom W/Ebony',
          img: 'Gibson.png',
          desc: 'Lorem ipsum, dolor sit amet, consectetur adipisicing elit. Quo, et? Nulla voluptate unde eaque laudantium.',
          price: '10900',
      },
      {
        id: 2,
        title: 'Fender Vintage Custom 1950',
        img: 'Fender.png',
        desc: 'Lorem ipsum, dolor sit amet, consectetur adipisicing elit. Quo, et? Nulla voluptate unde eaque laudantium.',
        price: '8452',
      },
      {
        id: 3,
        title: 'G&L FD ASAT Classic Bluesboy',
        img: 'G&L.png',
        desc: 'Lorem ipsum, dolor sit amet, consectetur adipisicing elit. Quo, et? Nulla voluptate unde eaque laudantium.',
        price: '4240',
      },
      {
        id: 4,
        title: 'Барабаны Ludwig Legacy Maple',
        img: 'Ludwig.jpg',
        desc: 'Lorem ipsum, dolor sit amet, consectetur adipisicing elit. Quo, et? Nulla voluptate unde eaque laudantium.',
        price: '10200',
      },
      {
        id: 5,
        title: 'Ударная установка Sonor ProLite',
        img: 'Sonor.jpg',
        desc: 'Lorem ipsum, dolor sit amet, consectetur adipisicing elit. Quo, et? Nulla voluptate unde eaque laudantium.', 
        price: '9230',
      },
      {
        id: 6,
        title: 'Ударная установка Pearl RFP',
        img: 'Pearl.jpg',
        desc: 'Lorem ipsum, dolor sit amet, consectetur adipisicing elit. Quo, et? Nulla voluptate unde eaque laudantium.',
        price: '7800',
      },
      {
        id: 7,
        title: 'Fender American Performer ',
        img: 'Fender_bass.jpg',
        desc: 'Lorem ipsum, dolor sit amet, consectetur adipisicing elit. Quo, et? Nulla voluptate unde eaque laudantium.',
        price: '4295',
      },
      {
        id: 8,
        title: 'Gibson Thunderbird Bass 2019',
        img: 'Gibson_bass.jpg',
        desc: 'Lorem ipsum, dolor sit amet, consectetur adipisicing elit. Quo, et? Nulla voluptate unde eaque laudantium.',
        price: '3447',
      },
      {
        id: 9,
        title: 'Бас-гитара Ibanez SR5000-OL',
        img: 'Ibanez_bass.jpg',
        desc: 'Lorem ipsum, dolor sit amet, consectetur adipisicing elit. Quo, et? Nulla voluptate unde eaque laudantium.',
        price: '4099',
      },
      ],
    }
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
    this.clearOrders = this.clearOrders.bind(this)

  }
  render(){
    return (
      <div className="wrapper">
        <Header/>
        <Items items={this.state.items} onAdd={this.addToOrder} orders={this.state.orders} onDelete={this.deleteOrder} clearOrders={this.clearOrders}/>
        <Footer/>
      </div>
    )
  }

  clearOrders(){
    this.setState((prevState) => ({...prevState,orders: []}))
  }


  deleteOrder(id){
    this.setState((prevState) => ({...prevState,orders: this.state.orders.filter(it => it.id !== id)}))
  }

  addToOrder(item) {
    const { orders } = this.state;
    const isInOrders = orders.some((it) => it.id === item.id);

    if (isInOrders) {
      this.setState({
        orders: orders.map((it) =>
          it.id === item.id
            ? {
                ...item,
                amount: +it.amount + 1,
              }
            : it
        ),
      });
    } else {
      this.setState({
        orders: [
          ...orders,
          {
            ...item,
            amount: 1,
          },
        ],
      });
    }
  }



}

export default App;
