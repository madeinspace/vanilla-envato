// controller.js

export default class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;
    this.view.sub('removeItem', this.onItemRemove.bind(this));
    this.model.sub('sync', this.render.bind(this));
  }

  onItemRemove(e) {
    const id = e.target.getAttribute('data-id');
    this.model.removeItemById(id);
  }

  render() {
    this.view.render(this.model.getData());
  }

  setView() {
    this.model.getItems();
  }
}
