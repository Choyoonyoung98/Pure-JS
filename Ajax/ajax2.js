document.getElementsById('button').addEventListener('click',loadUser);

function onload() {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'user.json', true);

  xhr.onload = function() {
    if(this.status == 200) {
      var user = JSON.parse(this.responseText);
      // console.log(user.name);
      var output = "";
      output.append += '<ul>'
      +'<li>ID: '+user.id+'</li>'
      +'<li>ID: '+user.id+'</li>'
      +'<li>ID: '+user.id+'</li>'
      +'</ul>';
    }
  }
  xhr.send();
}
