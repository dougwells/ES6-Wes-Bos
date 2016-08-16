//Maps.  Keys and values can be anything (key not limited to string)
const dogs = new Map();
  dogs.set('Snickers', 3);
  dogs.set('Sunny', 2);
  dogs.set('Hugo', 10);
  dogs.forEach((val, key) => console.log(val, key));
  for (const [key, val] of dogs) {
    console.log(key, val);
  }

  //WeakMap

  const strongMap = new Map();
  const weakMap = new WeakMap();
  let dog1 = {name: 'Crystal', breed: 'Labrador'};
  let dog2 = {name: 'Zoomba', breed: 'Collie'}

  strongMap.set(dog1, "Crystal is cool");
  weakMap.set (dog2, "Zoomba is crazy");
  console.log('b4', strongMap, weakMap);
  dog2 = null;
  setTimeout(function(){
    console.log('after', strongMap, weakMap)

  }, 10000);
