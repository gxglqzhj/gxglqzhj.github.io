<?php
session_start();

// 定义有效的用户名和密码
$validUsername = "admin";
$validPassword = "password";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST["username"];
    $password = $_POST["password"];

    // 检查用户名和密码是否匹配
    if ($username === $validUsername && $password === $validPassword) {
        // 设置登录状态
        $_SESSION["loggedIn"] = true;
        $_SESSION["username"] = $username;

        // 跳转到受保护的页面
        header("Location: protected.php");
        exit;
    } else {
        // 登录失败，跳转回登录页面
        header("Location: index.html");
        exit;
    }
} else {
    // 非法访问，跳转回登录页面
    header("Location: index.html");
    exit;
}
?>
