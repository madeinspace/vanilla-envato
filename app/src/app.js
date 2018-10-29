import View from './view.js';
import Model from './model.js';
import Controller from './controler.js';

class App {
  constructor() {
    this.view = new View();
    this.model = new Model();
    this.controler = new Controller(this.model, this.view);
  }

  init() {
    this.controler.start();
  }
}

export default App;
