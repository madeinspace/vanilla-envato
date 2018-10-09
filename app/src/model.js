export default class Model {
  constructor() {
    this.init();
    this.data = {};
  }

  init(){
    this.fetchData().then((data)=>{
        this.data = data;
        console.log(this.data);
    }, (error) => {
        console.log('shit man')
    });
  }

  getItems(){

  }

  fetchData(){
      return new Promise((resolve, reject) => {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', './src/data.json');
  
        xhr.onload = function() {
          if (xhr.status == 200) {
            resolve(JSON.parse(xhr.response));
          } else {
            reject(Error(xhr.statusText));
          }
        };
        xhr.onerror = function() {
          reject(Error('Network Error'));
        };
        xhr.send();
      });
  }
}
