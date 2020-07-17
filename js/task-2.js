"use strict";
const countProps = function (obj) {
  const keys = Object.keys(obj);
  const total = keys.length;
  return total;
};

console.log(countProps({}));

console.log(countProps({ name: "Mango", age: 2 }));

console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }));
