function Book(title, author, year){
  this.title = title;
  this.author = author;
  this.year = year;
  this.summary = function(){
    return `${this.title} is written by ${this.author} in ${this.year}`;
  }
}

book1 = new Book('Book One', 'John Doe', 1980);
book2 = new Book('Book Two', 'Jane Doe', 2008);

console.log(book2.summary());
