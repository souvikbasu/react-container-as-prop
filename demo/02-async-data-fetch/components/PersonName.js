import React from 'react';
import { BaseComponent } from 'react-container-as-prop';

export default class PersonName extends BaseComponent {
  render() {
    const {firstName, lastName} = this.props;

    return (
      <div>
        <div>Full Name: {firstName} {lastName}</div>
      </div>);
  }
}
