// const s1 = 'Hello';
// console.log(typeof s1);//string

// const s2 = new String('Hello');
// console.log(typeof s2); //object

// // console.log(window);
// // alert(1);
// console.log(navigator.appVersion);

//Object :Literal
const book = {
  title: 'Book one',
  author: 'John Doe',
  year: '2013',
  getSummary: function() {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  }
};

console.log(book.title);

// const b1 = new book()
