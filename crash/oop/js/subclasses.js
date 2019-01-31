class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
    }
    getSummary() {
      return `${this.title} was written by ${this.author} in ${this.year}`;
    }

  }

  //Magazine Subclass
  class Magazine extends Book() {
    constructor(title, author, year, month) {
      super(title, author, year);//상위 Book class로부터 속성값 가져옴

    }
  }

  //Instantiate Magazine
  const mag1 = new Magazine('Mag One', 'John Doe', '2018','Jan');


