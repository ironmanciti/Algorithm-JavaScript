//Inheritance
function Book(title, author, year){
  this.title = title;
  this.author = author;
  this.year = year;
  }

Book.prototype.summary = function(){
  return `${this.title} is written by ${this.author} in ${this.year}`;
}

function Magazine(title, author, year, month){
  Book.call(this, title, author, year); //Inheritance
  this.month = month;
}

Magazine.prototype = Object.create(Book.prototype);
Magazine.prototype.constuctor = Magazine;  //Use Magazine constructor

const magazine1 = new Magazine('Book One', 'John Doe', 1980, 'January');
console.log(magazine1.summary())
