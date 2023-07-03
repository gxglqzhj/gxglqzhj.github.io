<?php
session_start();

// 清除 session 数据
session_unset();
session_destroy();

// 跳转回登录页面
header('Location: index.html');
exit;
?>
