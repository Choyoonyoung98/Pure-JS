//MARK: conditional

if(1 == 1){// if 1 equal 1
  console.log('This is true');//show
}

if(1 == 2){// if 1 equal 1
  console.log('This is true');//not show
}

var numb1 = 3;
var numb2 = 3;

if(number1 == var2 && var1 == 3){
  console.log('This is true');//conditional1 and 2 both have to be true
}else{
  console.log('This is true');
}

var fruits = 'apple';
switch(fruits){
  case "banna":
    alert('I hate bananas');
    break;
  case "apple":
    alert('I love apple');
    break;
  case "orange":
    alert('Orange are ok');
  default:
    alert('I love all other fruits');
    break;
}//I love apple

//MARK: Object
//Object Literal

var person = {
  firstName: 'yoonyoung',
  lasName: 'Cho',
  age: 22,
  Children: ['Brianna','Nicolas'],
  address: {
    street: '555 Something st',
    city: 'Seoul',
    state: 'MA'
  },
  fullName: function(){
    return this.firstName +""+this.lasName;
  }
}
console.log(person.age); //22
console.log(person.Children[0]); //Brianna
console.log(person.address.city);//Seoul

console.lof(person.fullName());//yoonyoung Cho

//Object Cunstructor
var apple = new Object();
apple.color = 'red';
apple.shape = 'round';
apple.describe = function(){
  return 'An apple is the color'+this.color+'and is the shape'+this.shape;
}
console.log(apple.describe()); //An apple is the color red and is the shape round

//Constructor pattern
function Fruit(name, color, shape){
  this.name = name;
  this.color = color;
  this.shape = shape;

  this.describe = function(){
    return 'A' + this.name + 'is the color' +this.color+ 'and is the shape' +this.shape;
  }

}

var apple = new  Fruit('apple','red','round');
var melon = new  Fruit('apple','green','round');
console.log(apple.shape);//round
console.log(melon.describe);

var users = [
  {
    name: 'John Doe',
    age:30
  },
  {
    name: 'Mark Smith',
    age:22
  },
  {
    name: 'Shelly Williams',
    age:44
  },
]
console.log(users[0].name);








