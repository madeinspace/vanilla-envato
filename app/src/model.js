import service from './service.js';
import { PubSub } from './utils.js';
import { sortByKey } from './utils.js';

export default class Model extends PubSub {
  constructor() {
    super();
    this.data = {};
  }

  getItems() {
    service.getItems().then(
      res => {
        console.log(res);

        this.data = res.popular.items_last_three_months.map(item => {
          return {
            item: item.item,
            id: item.id,
            rating: item.rating,
            thumbnail: item.thumbnail,
            url: item.url,
            live_preview_url: item.live_preview_url
          };
        });
        // .map(reducedData => {
        //   console.log(reducedData);
        //   return sortByKey(reducedData, 'rating');
        // });
        this.data = sortByKey(this.data, 'rating');
        this.trigger('sync');
      },
      error => {
        console.log('error');
      }
    );
  }

  removeItemById(id) {
    this.data = this.data.filter(x => x.id !== id);
    this.trigger('sync');
  }

  getData() {
    return this.data;
  }
}
