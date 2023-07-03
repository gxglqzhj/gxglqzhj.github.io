function login() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // 模拟登录验证
    if (username === 'admin' && password === 'admin123') {
        showAdminSection();
    } else if (username === 'user' && password === 'user123') {
        showUserSection();
    } else {
        alert('用户名或密码不正确！');
    }
}

function showAdminSection() {
    document.getElementById('login-section').style.display = 'none';
    document.getElementById('admin-section').style.display = 'block';
}

function showUserSection() {
    document.getElementById('login-section').style.display = 'none';
    document.getElementById('user-section').style.display = 'block';
}
