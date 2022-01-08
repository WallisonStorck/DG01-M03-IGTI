import React, { Component } from 'react';

export default class App extends Component {
  constructor(){
    super();

    this.state = {
      allCountries: []
    }
  }

  async componentDidMount(){
    const res = await fetch('https://restcountries.com/v3.1/all', {mode: 'no-cors'});
    const json = await res.json();
    // console.log(json);
  }

  render() {
    return <p>Teste</p>;
  }
}
