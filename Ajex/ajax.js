//REMEMBER HTTP Status
//200: "Ok"
//403: "Forbidden"
//404: "Not found"


//Create event listener
document.getElementById('button').addEventListener('click',loadText);

function loadText() {
  console.log('button clicked');
  //Create XHR Object
  var xhr = new XMLHttpRequest();
  //OPEN - type, url/file, async
  xhr.open('GET','sample.txt', true);

  xhr.onload = function() {
  if(this.status == 200) {//200 mean ok
    console.log(this.responseText);

  }
}
//Sends request
xhr.send();

}


