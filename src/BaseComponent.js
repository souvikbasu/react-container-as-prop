import React, { Component } from 'react';

export default class BaseComponent extends Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    let vm = new this.props.vm();
    this.render = vm.bindCaller(this);
    this.forceUpdate();
  }
}
