import React, { Component } from 'react'

export class Item extends Component {
  render() {
    return (
        <div className='item'>
            <img src={'./img/' + this.props.item.img} width="50%" height="50%"/>
            <h2 className='item_title'>{this.props.item.title}</h2>
            <p className='item_desc'>{this.props.item.desc}</p>
            <b className='item_price'>{this.props.item.price}$</b>
            <div className='add-to-cart' onClick={() => this.props.onAdd(this.props.item)} >Buy</div>
        </div>
        
    )
  }
}

export default Item