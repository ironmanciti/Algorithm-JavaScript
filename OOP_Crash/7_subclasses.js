//ES6 stype inheritance
class Book {
  constructor(title, author, year){
    this.title = title;
    this.author = author;
    this.year = year;
  }
  getSummary(){
    return `${this.title} is written by ${this.author} in ${this.year}`;
  }
}

class Magazine extends Book {
  constructor(title, author, year, month){
    super(title, author, year);
    this.month = month
  }
}

mag1 = new Magazine('Magazine One', 'Honky Jon', 2010, 'January');
console.log(mag1)
console.log(mag1.getSummary())
