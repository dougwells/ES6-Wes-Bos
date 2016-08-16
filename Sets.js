const people = new Set();
//Set
  people.add('Doug');
  people.add('Ted');
  people.add('Erik');
  for (const person of  people) {
    console.log(person);
  }
  const students = new Set(['Henry', 'Anna', 'Brett']);
  const dogs = ['Crystal', 'Zooma'];
  const dogSet = new Set(dogs);

//WeakSet.  Note 10 second delay after delete dog1
  let dog1 = {name: "Crystal", breed: "Lab"};
  let dog2 = {name: "Zoomba", breed: "Collie"};
  const weakPen = new WeakSet([dog1, dog2]);
  console.log("B4 delete dog2", weakPen);
  dog2 = null;
  console.log("Immediately after delete dog1", weakPen);

  //Wait 10 seconds for garbage collection to take place
  setTimeout(function(){
    console.log("10 seconds after delete dog1", weakPen)
  }, 10000);
