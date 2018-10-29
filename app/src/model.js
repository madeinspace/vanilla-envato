import service from './service.js';
import { PubSub } from './utils.js';
import { sortByKey } from './utils.js';

export default class Model extends PubSub{
  constructor() {
    super();
    this.data = {};
  }

  getItems(){
    service.getItems().then(res => {
        this.data = sortByKey(res.popular.items_last_three_months, 'rating');
        this.trigger('sync');
    }, (error) => {
        console.log('error')
    });
  }

  removeItemById(id){
    this.data = this.data.filter(x => x.id !== id);
    this.trigger('sync');
  }

  getData(){
    return this.data;
  }
}
