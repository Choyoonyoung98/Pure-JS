//AJAX: Asychronous Javascript & XML

//REMEMBER HTTP Status
//200: "Ok"
//403: "Forbidden"
//404: "Not found"

//REMEBER readyState Values
// 0: request not initialized
// 1: server connection
// 2: request received
// 3:processing request
// 4: request finished and response is ready


//Create event listener
document.getElementById('button').addEventListener('click',loadText);

function loadText() {
  console.log('button clicked');
  //Create XHR Object
  var xhr = new XMLHttpRequest();
  //OPEN - type, url/file, async
  xhr.open('GET','sample.txt', true);

  console.log('READYTSTATE: ',xhr.readyState);

  //OPTIONAL - used for loaders
  xhr.onprogress = function() {
    console.log('READTSTATE: ', xhr.readyState); //3
  }

  xhr.onload = function() {//onload is not set until ready
  if(this.status == 200) {//200 mean ok
    console.log(this.responseText);//show sample.txt data
    document.getElementsById('text').innerHTML = this.responseText;//가져온 데이터 화면에 뿌려주기
  } else if(this.status == 404) {
    document.getElementById('text').innerHTML = 'Not found';
  }
}

xhr.onerror = function() {
  console.log('Request Error...');
}



// xhr.onreadystatechange = function() {
//   console.log('READYTSTATE: ',xhr.readyState);
//   if(this.readyState == 4 && this.status == 200) {
//     console.log(this.responseText);
//   }
// }

//Sends request
xhr.send();

}


