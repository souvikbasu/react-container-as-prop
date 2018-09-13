import React, { Component } from 'react';

export default class BaseComponent extends Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    let container = new this.props.container();
    container.bindCaller(this).then(newRender => {
      this.render = newRender;
      this.forceUpdate();
    })
  }
}
