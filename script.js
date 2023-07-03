function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // 发送 GET 请求到 login.php 文件，传递用户名和密码
    var url = "login.php?username=" + encodeURIComponent(username) + "&password=" + encodeURIComponent(password);
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            var response = JSON.parse(xhr.responseText);
            if (response.success) {
                window.location.href = "dashboard.html"; // 登录成功，跳转到仪表盘页面
            } else {
                document.getElementById("errorMessage").textContent = response.message; // 显示错误消息
            }
        }
    };
    xhr.send();
}
