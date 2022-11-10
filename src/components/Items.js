import React, { Component } from 'react'
import Item from './Item'
import Order from './Order'
import Popup from './Popup'

export class Items extends Component {
  constructor(props){
    super(props)
    this.state = {
      showPopup: false,
    }
    this.onCheckout = this.onCheckout.bind(this)
  }
  onCheckout(){
    this.props.clearOrders()
    this.setState((prevState) => ({...prevState,showPopup: true}))
    setTimeout(() => {
      this.setState((prevState) => ({...prevState,showPopup: false}))
    },5000)
  }
  render() {
    let cart_price = 0;
    this.props.orders.forEach(it => cart_price += Number.parseFloat(it.price) *Number(it.amount))

    return (
      <main>
        <div className='main_item'>
        {this.props.items.map(it => (
            <Item key={it.id} item={it} onAdd={this.props.onAdd}/>
        ))}
        </div>
        <div className='cart'>
            <div className='cart_header'>
                <h2>Cart</h2>
            </div>
            <div className='cart_body'>
                {this.props.orders.map(it => (
                    <Order onDelete={this.props.onDelete} key={it.id} item={it} />
                ))}
            </div>
            <div className='cart_price'>
                <b>Total: {new Intl.NumberFormat().format(cart_price)}$</b>
            </div>
            <div className='cart_checkout'>
                <button onClick={this.onCheckout}>Checkout</button>
            </div>
            {this.state.showPopup && <Popup/>}
        </div>
        
      </main>
    )
  }
}

export default Items