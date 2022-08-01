<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");    

$data = json_decode(file_get_contents("php://input"));

$email = $data->email;
$password = $data->password;

$conn = mysqli_connect("localhost", "root", "");
mysqli_select_db($conn, "react_db");

if($email && $password) {

    $sql = "SELECT * FROM register WHERE email = '$email' AND password = '$password'";
    $result = mysqli_query($conn, $sql);

    $num = mysqli_num_rows($result);
    $rs = mysqli_fetch_array($result);

    if($num >= 1) {
       http_response_code(200);
       $outp = "";
        $outp .= '{"full_name":"' . $rs["full_name"] . '",';
        $outp .= '"user_name":"' . $rs["user_name"] . '",';
        $outp .= '"email":"' . $rs["email"] . '",';
        $outp .= '"status":"200"}';
    
        echo $outp;
    } else {
        http_response_code(202);
        echo json_encode(array("message" => "User not found"));
    }
}
?>