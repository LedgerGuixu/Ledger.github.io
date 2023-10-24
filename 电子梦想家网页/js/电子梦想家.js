// 改变搜索框
document.addEventListener("DOMContentLoaded", function () {
    // 获取搜索框和其他元素
    var searchBox = document.getElementById("search_box");
    var otherElement = document.getElementById("text_remind");

    // 添加点击事件监听器到整个文档
    document.addEventListener("click", function (event) {
        // 检查搜索框是否包含内容
        if (searchBox.value.trim() !== "") {
            // 如果有内容，保持样式
            return;
        }

        // 如果点击事件发生在搜索框内，应用搜索框的样式
        if (event.target === searchBox) {
            searchBox.classList.add("active");
            otherElement.classList.add("active");
        } else {
            // 否则，移除搜索框和其他元素的样式
            searchBox.classList.remove("active");
            otherElement.classList.remove("active");
        }
    });
});

// 打开和关闭登录界面
function closeDialog() {

    document.getElementById('login_account_number').style.display = 'none';

    document.getElementById('login_verification_code').style.display = 'none';

    document.getElementById('main').style = "opacity: 1;";

}
function openDialog() {

    document.getElementById('login_account_number').style.display = 'block';

    document.getElementById('main').style = "opacity: 0.3;";
    account_login()
}

var imageStatus = 0; // 0 表示第一张图片，1 表示第二张图片
var imageSources = ["./img/未记住密码.png", "./img/记住密码.png"];
// 账号登录和短信登录切换
// 账号登录
function account_login(){
    var number_box = document.getElementById("number_box");
    var password_box = document.getElementById("password_box");
    var verification_code = document.getElementById("verification_code");
    var remember = document.getElementById("remember");
    var forget = document.getElementById("forget");
    var remember_password = document.getElementById("remember_password");


    number_box.placeholder = "手机号/用户名/邮箱"
    password_box.placeholder = "密码"
    verification_code.style.display = "none"
    remember.style.display = "block"
    remember_password.src = "./img/未记住密码.png"
    imageStatus = 0
    forget.style.display = "block"
}
// 短信登录
function text_login(){
    var number_box = document.getElementById("number_box");
    var password_box = document.getElementById("password_box");
    var verification_code = document.getElementById("verification_code");
    var remember = document.getElementById("remember");
    var forget = document.getElementById("forget");

    number_box.placeholder = "请输入手机号"
    password_box.placeholder = "验证码"
    verification_code.style.display = "block"
    remember.style.display = "none"
    forget.style.display = "none"
}

// 记住密码
function remember_password(){

    var remember_password = document.getElementById("remember_password");

    // 切换图像的状态
    imageStatus = 1 - imageStatus; // 切换 0 和 1

    remember_password.src = imageSources[imageStatus]; // 根据状态选择图片 URL

}

// 输入账号密码登录
function updateInfo() {
    var accountInput = document.getElementById("number_box");
    var passwordInput = document.getElementById("password_box");
    var login_text = document.getElementById("login_text");

    var account = accountInput.value;
    var password = passwordInput.value;


    if (account === "13751790011" && password === "zgx147258369") {
        closeDialog();
        accountInput.value = "";
        passwordInput.value = "";
        login_text.style.width = "3%";
        login_text.src = "./img/头像.jpg";
    }
}

