// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"];

beforeEach(function () {
  console.log("Before each test, cats:", cats);
  cats.length = 0;
  cats.push("Milo", "Otis", "Garfield");
  console.log("After initializing, cats:", cats);
});
function destructivelyAppendCat(name) {
    cats.push(name);
  }
  
  function destructivelyRemoveLastCat() {
    cats.pop();
  }
  function removeLastCat() {
    return cats.slice(0, -1);
  }
  function destructivelyPrependCat(name) {
    cats.unshift(name);
  }
  function removeFirstCat() {
    return cats.slice(1);
  }
  function prependCat(name) {
    cats.unshift(name);
    return cats.slice();
  }
  function appendCat(name) {
    return cats.concat([name]);
  }
  function destructivelyPrependCat(name) {
    cats.unshift(name);
  }
  function prependCat(name) {
    return [name, ...cats];
  }
  function destructivelyRemoveFirstCat() {
    cats.shift();
  }
