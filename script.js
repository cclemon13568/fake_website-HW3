document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const signInButton = document.getElementById('signInButton');
    const usernameInput = document.getElementById('login');
    const passwordInput = document.getElementById('password');

    signInButton.addEventListener('click', function(event) {
        let errorMessage = '';

        if (usernameInput.value.trim() === '') {
            errorMessage += '請填寫使用者名稱或電子郵件地址欄位。\n';
        }

        if (passwordInput.value.trim() === '') {
            errorMessage += '請填寫密碼欄位。\n';
        }

        if (errorMessage !== '') {
            event.preventDefault(); // 阻止表單的預設提交行為
            alert(errorMessage);
        } else {
            // 如果兩個欄位都有填寫，您可以選擇在這裡執行其他操作
            // 例如，您可以取消 event.preventDefault()，讓表單正常提交
            // 或者彈出您之前的 "釣魚網站" 警告
            event.preventDefault(); // 這裡仍然阻止表單提交，您可以根據需求修改
            alert('這是釣魚網站 這不是真的！');
        }
    });
});