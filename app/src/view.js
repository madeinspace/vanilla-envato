// view.js

import { Page } from './template.js';
import { PubSub } from './utils.js';

export default class View extends PubSub {
  constructor() {
    super();
    this.app = document.querySelector('#app');
    this.bindEvents();
  }

  bindEvents() {

    // could abstract this and pass the handler through a wrapper
    const handler = () => {
      const targetElement = event.target;
      const potentialElements = this.app.querySelectorAll('.remove');
      let hasMatch = false;
      // loop through node list and find any matching elements
      potentialElements.forEach(elem => {
        if (elem === targetElement) {
          hasMatch = true;
        }
      });

      if (hasMatch) {
        this.trigger('removeItem', event);
      }
    }

    this.app.addEventListener('click', handler);
  }

  render(data) {
    this.app.innerHTML = Page(data);
  }
}
