import React from "react";
import css from "./countries.module.css";

export default function Country(props) {
  const { country } = props;

  return (
    <div className={css.country}>
      <img className={css.flagCountry} src={country.flag} alt="Flag" />
      <span className={css.nameCountry}>{country.name}</span>
    </div>
  );
}
