import React from 'react';
import { BaseComponent } from '../../../dist';

export default class PersonNameReversed extends BaseComponent {
  render() {
    const {firstName, lastName} = this.props;

    return (
      <div style={{textAlign: 'center'}}>
        <h1>{lastName}, {firstName}</h1>
      </div>);
  }
}
