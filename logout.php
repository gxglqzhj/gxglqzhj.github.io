<?php
session_start();

// 清除登录状态
session_unset();
session_destroy();

// 跳转回登录页面
header("Location: index.html");
exit;
?>
