import React from 'react';

import Cards from './components/Cards/Cards';
import Chart from './components/Chart/Chart';
import CountryPicker from './components/CountryPicker/CountryPicker';

import styles from './App.module.css';

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
    console.log(country);
    //fetch the data
    //set the data
  }
  
  render(){

    const { data } = this.state;

    return (

      <div className={styles.container}>
        <Cards data={data} />
        <Chart/>
        <CountryPicker handleCountryChange={this.handleCountryChange}/>
    </div>
    )
  }
}

export default App;
