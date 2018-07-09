//ES6 stype syntactic sugar
class Book {
  constructor(title, author, year){
    this.title = title;
    this.author = author;
    this.year = year;
  }
  getSummary(){
    return `${this.title} is written by ${this.author} in ${this.year}`;
  }
  getAge(){
    const years = new Date().getFullYear() - this.year;
    return `${this.title} is ${years} years old.`;
  }
  revise(year){
    this.year = year
    this.revised = true
  }
  static greeting(){
    return "Good Bye"
  }
}

book1 = new Book('Book One', 'Honky Jon', 2010);
console.log(book1)
book1.revise(2017)
console.log(book1)
console.log(Book.greeting())
