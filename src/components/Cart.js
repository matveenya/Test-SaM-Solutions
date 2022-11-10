import React, { Component } from 'react'
import Order from './Order'

export class Cart extends Component {
  render() {
    return (
        <main>
        <div className='cart'>
            <div className='cart_header'>
                <h2>Cart</h2>
            </div>
            <div className='cart_body'>
                {this.props.orders.map(it => (
                    <Order key={it.id} item={it} />
                ))}
            </div>
            <div className='cart_price'>0$</div>
            <div className='cart_checkout'>
                <button>Checkout</button>
            </div>
        </div>
      </main>
    )
  }
}

export default Cart