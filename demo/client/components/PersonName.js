import React from 'react';
import { BaseComponent } from '../../../dist';

export default class PersonName extends BaseComponent {
  render() {
    const {firstName, lastName} = this.props;

    return (
      <div style={{textAlign: 'center'}}>
        <h1>{firstName} {lastName}</h1>
      </div>);
  }
}
