//ES5 style of Object Create
const BookProtos = {
  getSummary: function(){
    return `${this.title} is written by ${this.author} in ${this.year}`;
  },
  getAge: function(){
    const years = new Date().getFullYear() - this.year;
    return `${this.title} is ${years} years old.`;
  }
}

//Create Object
// const book1 = Object.create(BookProtos);
// book1.title = "Book One";
// book1.author = "John Doe";
// book1.year = 1980;

const book1 = Object.create(BookProtos, {
  title: {value: "Book One"},
  author: {value:"Jane Doe" },
  year: {value: 2008}
})

console.log(book1)
