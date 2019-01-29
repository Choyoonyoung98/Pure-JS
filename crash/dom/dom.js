// EXAMINE THE DOCUMENT OBJECT //

// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// document.title = 123;
// console.log(document.doctype);
// console.log(document.head);//everyrhing in the haed
// console.log(document.all);
// console.log(document.all[10]);
// document.all[10].textContent = 'Hello';
// console.log(document.links);
// console.log(document.images);

// GETELEMENTBYID //

// var headerTitle = document.getElementById('header-title');
// var header = document.getElementById('main-header');
// console.log(headerTitle);
// headerTitle.textContent = 'Hello';
// headerTitle.innerHTML = 'Goodbye';//overload
// //innerHTML은 display 그 자체를 불러온다. 눈에 보이는 것
// headerTitle.innerHTML = '<h3>Hello</h3>';
// header.style.borderBottom = 'solid 3px black';

// GETELEMENTBYCLASSNAME //
// var items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[0]);
// items[1].textContent = 'Jelly';
// items[1].style.fontWeight = 'bold';
// items[2].style.backgroundColor = 'gray';

// for(var i = 0; i <items.length; i++) {
//   items[i].style.backgroundColor = 'green';
// }

//GETELEMETBYTAGNAME
// var li = document.getElementsByTagName('li');
// console.log(li);
// console.log(li[0]);
// li[1].textContent = 'Jelly';
// li[1].style.fontWeight = 'bold';
// li[2].style.backgroundColor = 'gray';

// for(var i = 0; i <li.length; i++) {
//   li[i].style.backgroundColor = 'yellow';
// }

// QUERYSELECTOR //
//can put tag/title or anything
// var header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 4px gray';

// var input  = document.querySelector('input');
// input.value = 'Hello world'//input 1th item changed

// var submit = document.querySelector('input[type="submit"]');
// submit.value="SEND";

// var item = document.querySelector('.list-group-item');
// item.style.color = 'red'; //first item changed

// var lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color = 'blue';

// var secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.color = 'green';

// QUERYSELECTORALL //
// var titles = document.querySelectorAll('.title');
// titles[0].textContent = 'Hello';

// var odd = document.querySelectorAll('li:nth-child(odd)');
// var even = document.querySelectorAll('li:nth-child(even)');

// for(var i = 0; i < odd.length; i++){
//   odd[i].style.backgroundColor = '#f4f4f4';
//   even[i].style.backgroundColor = '#ccc';
// }


// TRAVERSTING THE DOM //
var itemlist = document.querySelector('#items');
//parentNode
// console.log(itemList.parentNode);
// itemlist.parentNode.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentNode.parentNode.parentNode);

//parentElement = same as parentNode
// console.log(itemList.parentElement);
// itemlist.parentNode.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentElement.parentElement.parentElement);

// childNode
// console.log(itemlist.childNodes);//not good :it include line break
// console.log(itemlist.children);//good
// itemlist.children[1].style.backgroundColor = 'yellow';

//FirstChild
// console.log(itemlist.firstChild);
//FirstElementChild
// console.log(itemlist.firstElementChild);
// itemlist.firstElementChild.textContent = 'Hello1'
//lastChild
// console.log(itemlist.lastChild);
//lastElementChild
// console.log(itemlist.lastElementChild);
// itemlist.lastElementChild.textContent = 'Hello1'

//nextSibling: include linebreak
// console.log(itemlist.nextSibling);
//nextElementSibling
// console.log(itemlist.nextElementSibling);

//previousElementSibling
// console.log(itemlist.previousElementSibling);

//createElement

//create a div
// var newDiv = document.createElement('div');

//Add class
// newDiv.className = 'Hello';

//Add id
// newDiv.id = 'Hi';

//Add attr
// newDiv.setAttribute('title','Hello Div');

//Create text node
// var newDivText = document.createTextNode('Hello World');

//Add Text to Div
// newDiv.appendChild(newDivText);

// var container = document.querySelector('header .container');
// var h1 = document.querySelector('header h1');


// console.log(newDiv);

// newDiv.style.fontSize = '30px';


// container.insertBefore(newDiv,h1);

var button = document.getElementById('button').addEventListener('click', buttonClick)

function buttonClick(e) {
// document.getElementById('header-title').textContent = 'Changed';
// document.querySelector('#main').style.backgroundColor = '#f4f4f4';
// console.log(e);

console.log(e.target);
//dom crash course part3 6:17

}





