const API = {
    POPULAR_ITEMS: "https://envato.github.io/front-end-coding-test/themeforest_popular_items.json"
}

const fetchData = (type, url, data=null) => {
    return new Promise((resolve, reject) => {
      var xhr = new XMLHttpRequest();
      if (data) {
        xhr.setRequestHeader('Content-Type', 'application/json');
      }
      xhr.open(type, url);

      xhr.onload = () => {
        if (xhr.status == 200) {
          resolve(JSON.parse(xhr.response));
        } else {
          reject(Error(xhr.statusText));
        }
      };
      xhr.onerror = () => {
        reject(Error('Network Error'));
      };
      xhr.send(data);
    });
}

const service = {
    getItems() {
      return fetchData('GET', API.POPULAR_ITEMS);
    },
}

export default service;