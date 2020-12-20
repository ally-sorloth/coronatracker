/* eslint-disable jsx-a11y/alt-text */
import React from 'react';

import Cards from './components/Cards/Cards';
import Chart from './components/Chart/Chart';
import CountryPicker from './components/CountryPicker/CountryPicker';

import styles from "./App.module.css"
import coronoImage from './images/image.png'

import { fetchData } from './api';


class App extends React.Component {
  state = {
    data: {},
    country: '',
  }


  async componentDidMount() {

    const fetchedData = await fetchData();

    this.setState({ data: fetchedData });
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);

    this.setState({ data: fetchedData, country: country });

    //fetch the data
    //set the data
  }
  
  render(){

    const { data, country } = this.state;

    return (
      <div className={styles.countainer}>
        <img className={styles.image} src={coronoImage} alt="COVID-19"/>
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange}/>
        <Chart data={data} country={country} />
      </div>
    )
  }
}

export default App;
