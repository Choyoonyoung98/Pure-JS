<?php

//Connect to a database
//phpadmin에 database를 생성한 후
$conn = mysqli_connect('loacalhost','root','123456','ajaxtest');


echo 'Processing...';

// //Check for GET variable


if(isset($_GET['name'])) {
  $name = mysqli_real_escape_string($conn, $_POST['name']);
  echo 'GET: Your name is ' . $_GET['name'];

  $query = "INSERT INTO users(name) VALUES('$name')";

  if(mysqli_query($conn, $query)) {
    echo 'User Added...';

  }else{
    echo 'ERROR: ' . mysqli_error($conn);
  }


}

// if(isset($_GET['name'])) {
//   echo 'GET: Your name is ' . $_GET['name'];


// }

//Check for POST variable
if(isset($_POST['name'])) {
  echo 'POST: Your name is ' . $_POST['name'];
}
