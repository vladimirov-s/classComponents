import React, { Component } from "react";
import { pics } from "../constants/Pics";

class Hello extends Component {
  constructor(props) {
    super(props);
    const { title, price, available, picture } = this.props.tovari;
    this.state = {
      title: title,
      price: price,
      available: available,
      picture: picture,
      wishQuantity: 0,
    };
    this.increase = this.increase.bind(this);
  }

  increase = () => {
    if (this.state.available > 0) {
      this.setState((prevState) => ({
        wishQuantity: prevState.wishQuantity + 1,
        available: prevState.available - 1,
      }));
      this.props.changTotalCoast("inc", this.state.price);
    }
  };
  decrease = () => {
    if (this.state.wishQuantity > 0) {
      this.setState((prevState) => ({
        wishQuantity: prevState.wishQuantity - 1,
        available: prevState.available + 1,
      }));
      this.props.changTotalCoast("decr", this.state.price);
    }
  };

  render() {
    const { title, price, available, picture, wishQuantity } = this.state;
    return (
      <div className='card'>
        <div className='wrap'>
          <img src={picture} alt='' />
        </div>
        <p className='title'>{title}</p>
        <p className='price'>Цена: {price}</p>
        <p className='available'>Всего: {available}</p>
        <div className='controls'>
          <i
            className='circle'
            onClick={(e) => {
              this.decrease();
            }}
            id='decr'>
            {pics.minus_circle}
          </i>
          <span>{wishQuantity}</span>
          <i
            className='circle'
            onClick={(e) => {
              this.increase();
            }}
            id='incr'>
            {pics.plus_circle}
          </i>
        </div>
      </div>
    );
  }
}

export default Hello;
