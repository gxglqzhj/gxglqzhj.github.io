document.addEventListener("DOMContentLoaded", function () {
    var usernameElement = document.getElementById("username");
    var roleElement = document.getElementById("role");

    // 检查用户是否已登录
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "check_session.php", true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            var response = JSON.parse(xhr.responseText);
            if (response.success) {
                usernameElement.textContent = response.username;
                roleElement.textContent = response.role;
            } else {
                window.location.href = "index.html"; // 未登录，跳转回登录页面
            }
        }
    };
    xhr.send();
});
