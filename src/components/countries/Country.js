import React, { Component } from "react";
import css from "./countries.module.css";

export default class Country extends Component {
  render() {
    const { country } = this.props;

    return (
      <div className={css.country}>
        <p>
          {country.id} - {country.name}
        </p>
      </div>
    );
  }
}
