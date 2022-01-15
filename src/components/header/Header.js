import React, { Component } from "react";
import { formatNumber } from "../helpers/formatHelper";
import css from "./header.module.css";

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
      <div className={`${css.flexRow} ${css.border}`}>
        <input
          className={css.inputCountries}
          type="text"
          value={filter}
          placeholder="Filter"
          onChange={this.handleChangeInput}
        />
        <span>
          Countries: <strong>{countryCount}</strong> |
        </span>
        <span>
          Population: <strong>{formatNumber(populationCount)}</strong> |
        </span>
      </div>
    );
  }
}
