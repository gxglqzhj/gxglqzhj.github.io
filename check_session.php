<?php
session_start();

$response = array();

if (isset($_SESSION['username']) && isset($_SESSION['role'])) {
    $response['success'] = true;
    $response['username'] = $_SESSION['username'];
    $response['role'] = $_SESSION['role'];
} else {
    $response['success'] = false;
}

header('Content-Type: application/json');
echo json_encode($response);
?>
