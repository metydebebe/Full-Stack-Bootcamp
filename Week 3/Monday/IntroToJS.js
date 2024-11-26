
let book = {
    title : 'The Book Does Not End',
    author: 'M.D',
    pages: 234,
}

console.log(book.title);
console.log(book.author);


const colors = ['pink', 'yellow', 'blue', 'green', 'orange']

for(let i=0 ; i<colors.length; i++){
    console.log(colors[i]);
}

let person = {
    name:'Mety',
    age : 22,
    isStudent: true,
}

person.age = person.age + 1;
person.isStudent = false;

console.log(person)

let temperature = 37;
let weather ='rainy';

if((temperature > 20) & (weather == 'sunny')){
    console.log("It's warm and sunny!")
}else if((temperature<=20) & (weather== 'rainy')){
    console.log("It's cold and rainy!")
}else{
console.log("It's just another day.")
}
