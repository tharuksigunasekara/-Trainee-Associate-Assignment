<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: GET");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");    



$conn = mysqli_connect("localhost", "root", "");
mysqli_select_db($conn, "react_db");

$result = mysqli_query($conn, "SELECT * FROM register");
$outp = "";
while($rs = mysqli_fetch_array($result)) {
    if ($outp != "") {$outp .= ",";}
    $outp .= '{"id":"' . $rs["id"] . '",';
    $outp .= '"user_name":"' . $rs["user_name"] . '",';
    $outp .= '"full_name":"' . $rs["full_name"] . '",';
    $outp .= '"email":"' . $rs["email"] . '"}';
}

$outp ='{"records":['.$outp.']}';
echo($outp);


?>