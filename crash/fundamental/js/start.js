alert('Script Tags Work')

//MARK: variation

//Number
//String
//Array
//Object

var number1 = 35;
var number2 = 40;

alert(number1+number2);
alert('My favorite number is '+number1);

//letters, numbers, underscores, dollar signs
//begin with a letter
//_ $
//Case sensitive

var test = 'This is a test';
var Test = 'This is a another test';
//they are sensitive, not same

alert(test);

//camel case
var myNumber;
myNumber = 5;

//partial case
var MyFavoriteNumber;

//underscore
var my_favorite_number;

//MARK: Array
var colors = ['red', 'blue','green'];//red=0, blue=1, green=2 //3<=x: unfined

alert(colors);//print out everything
alert(colors[1]);//print out blue

var colors = new Array('red','yellow','orange');
alert(colors[2]);

colors[3] = 'green';
alert(colors); //red, yellow, orange, green

colors.push('purple');
alert(colors[4]); //purple

var numbers = [5,77,6,43,'Seven'];//can mix string and number
alert(numbers[0]+numbers[1]);//5+77
alert(numbers.length); //5
alert(numbers.sort());//upper sort: 5,6,43,77,Seven
alert(numbers.reverse());//Seven,43,6,77,5

//MARK: loop
for(var i = 0; i < 10; i++) {
  console.log(i);
}

while(i < 10) {
  console.log(i);
}

var numbers = [33,54,76,345,24];
numbers.reverse();

for(var i = 0; i < numbers.length; i++){
  console.log(numbers[i]);
}







