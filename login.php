<?php
session_start();

// 固定的账号密码及其对应的权限等级
$users = array(
    array('username' => 'wangkai', 'password' => 'wangkai', 'role' => 'admin'),
    array('username' => '322', 'password' => '322', 'role' => 'user')
);

$response = array();

if (isset($_GET['username']) && isset($_GET['password'])) {
    $username = $_GET['username'];
    $password = $_GET['password'];

    // 验证用户名和密码
    foreach ($users as $user) {
        if ($user['username'] === $username && $user['password'] === $password) {
            // 登录成功，将用户信息保存在 session 中
            $_SESSION['username'] = $user['username'];
            $_SESSION['role'] = $user['role'];
            $response['success'] = true;
            break;
        }
    }

    if (!$response['success']) {
        $response['success'] = false;
        $response['message'] = 'Invalid username or password.';
    }
} else {
    $response['success'] = false;
    $response['message'] = 'Username and password are required.';
}

header('Content-Type: application/json');
echo json_encode($response);
?>
