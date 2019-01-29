function changeBackground(x) {
  console.log(x.value);
  var body = document.getElementById('body');
  body.style.backgroundColor = x.value;


}

function validateForm() {
  var firstname = document.forms["myForm"]["firstName"].value;

  if(firstname == null || firstname == ""){
    alert('First name is required');
    return false;
  }
  if(firstname.length < 3){
    alert('Firstname must be at least 3 chars');
    return false;
  }
}
