import React from 'react';
import { BaseComponent } from '../../../dist';

export default class Country extends BaseComponent {
  render() {
    const {country} = this.props;
    return <div>Country: {country}</div>;
  }
}
