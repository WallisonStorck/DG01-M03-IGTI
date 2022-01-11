import React, { Component } from "react";

export default class Header extends Component {
  handleChangeInput = (event) => {
    const { onChangeFilter } = this.props;
    const newText = event.target.value;
    onChangeFilter(newText);
  };

  render() {
    const { filter, countryCount, populationCount } = this.props;
    /**
     * Input recebe a prop filter, que é o valor atual do input e o "onChange"
     * ou seja, a qualquer alteração do input, chame "handleChangeInput", a
     * função que encapsula o método "onChangeFilter" recebido via props.
     */
    return (
      <>
        <input type="text" value={filter} onChange={this.handleChangeInput} />
        <span>Países: {countryCount}|</span>
        <span>População: {populationCount}|</span>
      </>
    );
  }
}
