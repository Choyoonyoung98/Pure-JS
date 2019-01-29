
function doClick() {
alert('You Clicked');
}

function changeText() {
  var title = document.getElementById('title');
  title.innerHTML = 'You Clicked!';
}

function showDate() {
  var time = document.getElementById('time');
  time.innerHTML = Date();
}

function clearDate() {
  var time = document.getElementById('time');
  time.innerHTML = '';
}
