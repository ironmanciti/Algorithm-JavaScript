// let s1 = "Hello";
// console.log(typeof s1);
//
// let s2 = new String('Hello');
// console.log(typeof s2);
//
// alert(1)

let book1 = {
  title: "Book1",
  author: "John Doe",
  year: 1980,
  summary: function(){
    return `${this.title} is written by ${this.author} in ${this.year}`;
  }
}

let book2 = {
  title: "Book Two",
  author: "Jane Doe",
  year: 1990,
  summary: function(){
    return `${this.title} is written by ${this.author} in ${this.year}`;
  }
}

console.log(book2.summary());
console.log(Object.values(book1));
console.log(Object.keys(book1));
