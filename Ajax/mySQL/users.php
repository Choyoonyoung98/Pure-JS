<?php

//Create Connection
$conn = mysqli_connect('loacalhost','root','123456','ajaxtest');

$query = 'SELECT * FROM users';

//GET Result
$result = mysqli_query($conn, $query);

//Fetch Data
$users = mysql_fetch_all($result, MYSQLI_ASSOC);

echo json_encode($users);//put it into json
