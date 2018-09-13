import React, { Component } from 'react';

export default class BaseContainer extends Component {
  constructor(props) {
    super(props);
  }

  getData() {
    return {};
  }

  async bindCaller(component) {
    let props = component.props;

    let extraProps = await this.getData();
    component.props = Object.assign(extraProps, props);
    this.childComponent = component.render();
    return this.render.bind(this);
  }

  render() {
    return (
      <div>
        {this.childComponent}
      </div>);
  }
}
