// controller.js

export default class Controller {
    constructor(model, view) {
      this.model = model;
      this.view = view;
    };

    render(){
      this.view.render(this.model.toJSON());
    };

    setView() {
        this.model.getItems();
        this.render();
    };
  }