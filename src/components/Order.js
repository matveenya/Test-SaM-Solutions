import React, { Component } from 'react'
import { TiDelete } from 'react-icons/ti'

export class Order extends Component {
  render() {
    
    return (
      <div className='order'>
        <h3 className='order_title'>{this.props.item.title}</h3> 
        <b className='order_price'>{this.props.item.price}$</b>
        <b className='order_x'>X</b>
        <b className='order_amount'>{this.props.item.amount}</b>
        <TiDelete className="delete_icon" onClick={() => this.props.onDelete(this.props.item.id)}/>
      </div>
    )
  }
}

export default Order