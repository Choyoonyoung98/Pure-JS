//Constructor
function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;

}

//get summary
Book.prototype.getSummary = function() {
  return `${this.title} was written by ${this.author} in ${this.year}`;
};

//Magazine Constructor
function Magazine(title, author, year, month) {
  Book.call(this, title, author, year);

  this.month = month;//add

}

//Inherit prototype
Magazine.prototype = Object.create(Book.prototype);

//Initialize Magazine Object
const mag1 = new Magazine('Mag One', 'Harry','2018','Jan');

//Use Magazine Constructor
Magazine.prototype.constructor = Magazine;

