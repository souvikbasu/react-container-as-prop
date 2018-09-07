import React from 'react';

import PersonName from './PersonName';
import PersonNameReversed from './PersonNameReversed';
import PersonData from '../containers/PersonData';
import Country from './Country';
import CountryData from '../containers/CountryData';

export default class App extends React.Component {
  render() {
    return (
      <div style={{textAlign: 'center'}}>
        <PersonName vm={PersonData} />
        <PersonNameReversed vm={PersonData} />
        <Country vm={CountryData} />
      </div>);
  }
}
