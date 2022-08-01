<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");    

$data = json_decode(file_get_contents("php://input"));

$full_name = $data->full_name;
$user_name = $data->user_name;
$email = $data->email;
$password = $data->password;

$conn = mysqli_connect("localhost", "root", "");
mysqli_select_db($conn, "react_db");

if($full_name && $user_name && $email && $password) {

    $sql = "INSERT INTO register(full_name, user_name, email, password) VALUES ('$full_name', '$user_name', '$email', '$password')";

    $result = mysqli_query($conn, $sql);

    if($result){

        $response['data'] = array(
            'status' => 'valid'
        );
        echo json_encode(array($response));
    } else {
        $response['data'] = array(
            'status' => 'invalid'
        );
        echo json_encode(array($response));
    }
}
?>