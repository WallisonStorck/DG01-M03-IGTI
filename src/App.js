import React, { Component } from "react";
import Countries from "./components/countries/Countries";
import Header from "./components/header/Header";
import css from "./app.module.css";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      allCountries: [],
      filteredCountries: [],
      filter: "",
      totalPopulation: 0,
    };
  }

  /**
   * Função que vai calcular e retorna a população total de países conforme
   * parâmetro, seja todos ou somente os filtrados...
   */
  countTotalPopulationFrom(countries) {
    const totalPopulation = countries.reduce((accumulator, current) => {
      return accumulator + current.population;
    }, 0);

    return totalPopulation;
  }

  /**
   * Função para os primeiros procedimentos após montado o DOM, faz o fetch da API
   * filtra somente os dados necessários, conta a população e seta no estado...
   * Obs.: "filteredName" existe somente para usar ao filtrar os países, por
   * questões de performance.
   */
  async componentDidMount() {
    const res = await fetch("https://restcountries.com/v2/all");
    const json = await res.json();

    const allCountries = json.map(({ numericCode, name, flag, population }) => {
      return {
        id: numericCode,
        name,
        filteredName: name.toLowerCase(),
        flag,
        population,
      };
    });

    const totalPopulation = this.countTotalPopulationFrom(allCountries);
    /**
     * Inicialmente "filteredCountries" começa com todos os países
     */
    this.setState({
      allCountries,
      filteredCountries: allCountries,
      totalPopulation,
    });
  }

  /**
   * Função que é chamada após cada interação do usuário no input, ela manda o
   * texto para o estado "filter", que é lançado no input através da props no
   * componente; filtra os países conforme texto do input coloca em
   * "filteredCountries", conta a população e também manda para o estado.
   */
  handleChangeFilter = (newText) => {
    this.setState({
      filter: newText,
    });

    const nameCountryLowerCase = newText.toLowerCase();

    const filteredCountries = this.state.allCountries.filter((country) => {
      return country.filteredName.includes(nameCountryLowerCase);
    });

    const totalPopulation = this.countTotalPopulationFrom(filteredCountries);

    this.setState({
      filteredCountries,
      totalPopulation,
    });
  };

  render() {
    const { filteredCountries, filter, totalPopulation } = this.state;

    return (
      <div className={css.container}>
        <h1 style={{ textAlign: "center" }}>React Countries</h1>

        {/* Passado por props o "filter", que é o valor atual do input, e outras
        que o próprio nome diz a respeito */}
        <Header
          filter={filter}
          countryCount={filteredCountries.length}
          populationCount={totalPopulation}
          onChangeFilter={this.handleChangeFilter}
        />

        <Countries countries={filteredCountries} />
      </div>
    );
  }
}
