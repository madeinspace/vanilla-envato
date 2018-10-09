// view.js

import { controls } from './template.js';

export default class View {
  constructor() {
    this.el = document.getElementById('app');
  }
  render() {
    this.el.innerHTML = controls();
  }
}