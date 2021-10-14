function forEach (obj, callback) {
  for(let element in obj) {
    if(obj.hasOwnProperty(element)) {
      callback(element);
    };
  };
}

forEach({a: 1, b: 2, c: 3}, element => console.log(element));
