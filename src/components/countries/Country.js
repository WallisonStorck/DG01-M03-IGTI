import React, { Component } from "react";

export default class Country extends Component {
  render() {
    const { country } = this.props;

    return (
      <>
        <p>
          {country.id} - {country.name}
        </p>
      </>
    );
  }
}
