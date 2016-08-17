function* listPeople(){
  yield "Doug";
  yield "Sierra";
  yield "Crystal";
}

const people = listPeople();
// console.log(people.next());
// console.log(people.next());
// console.log(people.next());

for(const person of people){
  console.log(person);
}
