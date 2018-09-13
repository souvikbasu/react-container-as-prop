import React from 'react';
import { BaseComponent } from 'react-container-as-prop';

export default class PersonNameReversed extends BaseComponent {
  render() {
    const {firstName, lastName} = this.props;

    return (
      <div>
        <div>Full Name (Reversed): {lastName}, {firstName}</div>
      </div>);
  }
}
