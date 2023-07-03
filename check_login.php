<?php
session_start();

// 检查用户是否已登录
$response = array(
    'loggedIn' => isset($_SESSION['loggedIn'])
);

header('Content-Type: application/json');
echo json_encode($response);
?>
