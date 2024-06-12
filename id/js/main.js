// main.js

// SweetAlert 初始化
swal({
    title: "账号每30分钟更新",
    text: '<h4 style="color:#181818">只能在桌面AppStore内登录ID</h4><hr><h4 style="color:#e91e63">千万不要在设置中登录！</h4><h4 style="color:#e91e63">千万不要在设置中登录！</h4><h4 style="color:#e91e63">千万不要在设置中登录！</h4><hr><h4 style="font-size:18px;color:red">无法获取账号就换4G网络</h4><br><span class="clock">10</span> 秒后自动关本窗口',
    html: true,
    timer: 11000,
    showConfirmButton: false,
    confirmButtonText: 'OK',
});

// 倒计时
var timeClock;

function sendCode() {
    var timer_num = 10;
    timeClock = setInterval(function () {
        timer_num--;
        $('.clock').html(timer_num);
        if (timer_num == 0) {
            clearInterval(timeClock);
            $('.clock').html(0);
        }
    }, 1000);
}

sendCode();

// 禁止一些快捷键和右键
document.onkeydown = function () {
    var e = window.event || arguments[0];
    if (e.keyCode == 123) {
        return false;
    } else if ((e.ctrlKey) && (e.shiftKey) && (e.keyCode == 73)) {
        return false;
    } else if ((e.shiftKey) && (e.keyCode == 121)) {
        return false;
    }
};

document.oncontextmenu = function () {
    return false;
};

