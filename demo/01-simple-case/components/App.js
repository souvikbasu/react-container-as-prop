import React from 'react';

import PersonName from './PersonName';
import PersonNameReversed from './PersonNameReversed';
import PersonContainer from '../containers/PersonContainer';
import Country from './Country';
import CountryContainer from '../containers/CountryContainer';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <PersonName container={PersonContainer} />
        <PersonNameReversed container={PersonContainer} />
        <Country container={CountryContainer} />
      </div>);
  }
}
