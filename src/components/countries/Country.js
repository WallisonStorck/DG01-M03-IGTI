import React, { Component } from "react";
import css from "./countries.module.css";

export default class Country extends Component {
  render() {
    const { country } = this.props;

    return (
      <div className={css.country}>
        <img className={css.flagCountry} src={country.flag} alt="Flag" />
        <span className={css.nameCountry}>{country.name}</span>
      </div>
    );
  }
}
