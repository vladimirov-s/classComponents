import React, { Component } from "react";
import Card from "./Card";
import { colleciya } from "../constants/CoolectionForEntrance";
let arrForOut = [];
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filtrValue: "",
      temporaryStore: "",
      totalPrice: 0,
    };
  }

  changTotalCoast = (direct, value) => {
    if (direct === "inc") {
      this.setState((prevState) => ({
        totalPrice: prevState.totalPrice + value,
      }));
    } else if (direct === "decr") {
      this.setState((prevState) => ({
        totalPrice: prevState.totalPrice - value,
      }));
    }
  };

  finderProducts = () => {
    arrForOut.length = 0;
    const len = this.state.filtrValue.length;
    colleciya.forEach((elem) => {
      const subct = elem.title.substring(0, len);
      if (subct === this.state.filtrValue) {
        arrForOut.push(elem);
      }
    });
  };
  render() {
    this.finderProducts();
    return (
      <div className='App'>
        <div id='header'>
          <h1>My Avito</h1>
          <div id='FndAndRes'>
            <div>
              <input
                placeholder='Название товара'
                type='text'
                onKeyUp={(e) =>
                  this.setState({
                    temporaryStore: e.target.value,
                  })
                }
              />
              <button
                onClick={() => {
                  this.setState({
                    filtrValue: this.state.temporaryStore,
                  });
                  this.finderProducts();
                }}>
                Поиск
              </button>
            </div>
            <span>
              Общая стоимость выбранных товаров:
              {<strong>{this.state.totalPrice}</strong>}
            </span>
          </div>
        </div>
        <div id='output'>
          {arrForOut.map((element, i) => (
            <Card
              tovari={element}
              changTotalCoast={this.changTotalCoast}
              key={i}
            />
          ))}
        </div>
      </div>
    );
  }
}
export default App;
