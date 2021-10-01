import React, { Component } from "react";
export const NumberContext = React.createContext();

export class NumberProvider extends Component {
  constructor() {
    super();
    this.state = {
      number: 5
    };
  }
  updateNumber() {
    this.setState({
      number: Math.random()
    });
  }
  render() {
    return (
      <NumberContext.Provider
        value={{
          number: this.state.number,
          updateNumber: this.updateNumber.bind(this)
        }}
      >
        {this.props.children}
      </NumberContext.Provider>
    );
  }
}
