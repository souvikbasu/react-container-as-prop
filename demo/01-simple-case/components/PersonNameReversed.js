import React from 'react';
import { BaseComponent } from '../../../dist';

export default class PersonNameReversed extends BaseComponent {
  render() {
    const {firstName, lastName} = this.props;

    return (
      <div>
        <div>Full name (Reversed): {lastName}, {firstName}</div>
      </div>);
  }
}
