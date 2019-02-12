document.getElementById('button').addEventListener('click',loadUsers);


function loadUsers() {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'user.php', true);

  xhr.onload = function() {
    if(this.status == 200) {
      var user = JSON.parse(this.responseText);
      // console.log(user.name);
      var output = "";

      for(var i in users) {
        output += '<ul>'
        +'<li>ID: '+user[i].id+'</li>'
        +'<li>Name: '+user[i].name+'</li>'
        +'</ul>';
      }


      document.getElementById('users').innerHTML = output;
    }
  }
  xhr.send();
}


