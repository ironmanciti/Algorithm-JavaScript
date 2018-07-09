function Book(title, author, year){
  this.title = title;
  this.author = author;
  this.year = year;
  }

Book.prototype.summary = function(){
  return `${this.title} is written by ${this.author} in ${this.year}`;
}

Book.prototype.getAge = function(){
  const years = new Date().getFullYear() - this.year;
  return `${this.title} is ${years} years old.`;
}

Book.prototype.revise = function(year){
  this.year = year
  this.revised = true
}

book1 = new Book('Book One', 'John Doe', 1980);
book1.revise(2015);
console.log(book1.getAge());
console.log(book1);
