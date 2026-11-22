var userinput = {
    name: "Ola",
    pin: "9854",
    baln: "500"
}

const PIN_LENGTH = 4; //طول الرمز السري

// اظهار شاشة PIN فقط
$("#screen__landing, #screen__withdrawal, #screen__deposit, #screen__balance").hide();
$(".error_message").hide();

// -------------- PIN SCREEN --------------
var enteredPIN = ""; //لحفظ الرمز السري المدخل داخل هذه القيمة

function showPin() {
    $("#screen__pin .text_box").text(enteredPIN);
}

// 1) اخذ الرقم من pin_num واظهاره داخل text_box
$("#screen__pin .pin_num").click(function () {
    if (enteredPIN.length < PIN_LENGTH) {
        enteredPIN += $(this).attr("value");
        showPin();
        $(".error_message").hide();
    }
});

//2) زر الالغاء: مسح كامل الارقام داخل text_box
$("#pin_cancel_btn").click(function () {
    enteredPIN = "";
    showPin();
    $(".error_message").hide();
});

// 3) زر المسح: مسح الرقم الاخير فقط
$("#pin_clear_btn").click(function () {
    enteredPIN = enteredPIN.slice(0, -1);
    showPin();
});

// 4) زر الادخال: التأكد من الرمز ، الذهاب الى الصفحة التالية اذا كان صحيح
$("#pin_enter_btn").click(function () {
    if (enteredPIN === userinput.pin) {
        enteredPIN = "";
        showPin();
        $(".error_message").hide();
        $("#screen__pin").hide();
        $("#screen__balance").hide();
        $("#screen__landing").show();
    } else {
        $(".error_message").removeClass("hidden").show();
        enteredPIN = "";
        showPin();
    }
});

$("#amount_num").append(userinput.baln)

// -------------- SHOW AND HIDE SCREEN --------------
$("#balance_btn").click(() => {
    $("#screen__landing").hide();
    $("#screen__balance").show();
})

$("#withdraw_btn").click(() => {
    $("#screen__landing").hide();
    $("#screen__withdrawal").show();
})

$("#deposit_btn").click(() => {
    $("#screen__landing").hide();
    $("#screen__deposit").show();
})

// -------------- WELCOM TAG --------------
$('.message-tap').append('<p>Good Morning ' + userinput.name + ', How are you today?</p>');

// -------------- THE TIME --------------
let currentDate = new Date();
let hours = currentDate.getHours();
let minutes = currentDate.getMinutes();
let day = currentDate.getDate();
let mon = currentDate.getMonth();
let year = currentDate.getFullYear();

// Days
var weekday = new Array(7);
weekday[0] = "Sun";
weekday[1] = "Mon";
weekday[2] = "Tue";
weekday[3] = "Wed";
weekday[4] = "Thu";
weekday[5] = "Fri";
weekday[6] = "Sat";
var D = weekday[currentDate.getDay()];

// Months
var month = new Array();
month[0] = "January";
month[1] = "February";
month[2] = "March";
month[3] = "April";
month[4] = "May";
month[5] = "June";
month[6] = "July";
month[7] = "August";
month[8] = "September";
month[9] = "October";
month[10] = "November";
month[11] = "December";
var M = month[currentDate.getMonth()];

let dated = D + ", " + day + " " + M + " " + year;

// AM and PM
let mid = 'pm';
if (minutes < 10) { minutes = "0" + minutes; }
if (hours < 12) { mid = 'am'; }

let hours12 = hours % 12 || 12; //يجعل الساعة بنظام 12 ساعة
$('.Time').append("<p>" + hours + ":" + minutes + " " + mid + "</p>");
$('.Date').append("<p>" + dated + "</p>");

// Times
let container = document.querySelector(".Time")
function getTime() {
    let data = new Date()
    //let year = data.getFullYear()//to make the second stel work

    let hour = data.getHours()
    let min = data.getMinutes()
    let sec = data.getSeconds()

    time.textContent = hour + " : " + min + " : " + sec;
}

// Back Button
$("#withdraw_back_btn").click(() => {
    $("#screen__withdrawal").hide();
    $("#screen__landing").show();
});

$("#deposit_back_btn").click(() => {
    $("#screen__deposit").hide();
    $("#screen__landing").show();
});

$("#balance_back_btn").click(() => {
    $("#screen__balance").hide();
    $("#screen__landing").show();
});

var balance = Number(userinput.baln);

function updateBalance() {
    $("#amount_num, #anmount_num, #balance_num").text(balance);
}
updateBalance();

// -------------- WITHDRAWAL SCREEN --------------
var withdrawAmount = "";
var $withdrawBox = $("#screen__withdrawal .text_box");

$withdrawBox.prop("readonly", true);
$(".warning_message").hide();

var $withdrawSuccess = $('<p class="withdraw_message">The withdrawal process has been successful</p>')
.css({"color": "green", "display": "flex", "justify-content": "center", "font-size": "20px", "margin": "1.7rem"})
.insertAfter(".warning_message")
.hide();

function showWithdraw() {
    $withdrawBox.val(withdrawAmount);
}

// اخذ الرقم من pin_num واظهارها في text_box
$("#screen__withdrawal .pin_num").click(function () {
    withdrawAmount += $(this).attr("value");
    showWithdraw();
    $(".warning_message").hide();
    $withdrawSuccess.hide();
});

function confirmWithdraw() {
    var amount = Number(withdrawAmount);
    if (!amount) {
        return;
    }
    if (amount > balance) {
        $withdrawSuccess.hide();
        $(".warning_message").show();
    } else {
        balance -= amount;
        updateBalance();
        $(".warning_message").hide();
        $withdrawSuccess.show();
    }
    withdrawAmount = "";
    showWithdraw();
}

$(document).on("keydown", (e) => {
    if (e.key === "Enter" && $("#screen__withdrawal").is(":visible")) {
        e.preventDefault();
        confirmWithdraw();
    }
});

$(".withdra_form").on("submit", (e) => {
    e.preventDefault();
});


// -------------- DEPOSIT SCREEN --------------

var depositAmount = "";
var $depositBox = $("#screen__deposit .text_box");

$depositBox.prop("readonly", true);
$(".deposit_message").hide();

function showDeposit(){
    $depositBox.val(depositAmount);
}

$("#screen__deposit .pin_num").click(function () {
    depositAmount += $(this).attr("value");
    showDeposit();
    $(".deposit_message").hide();
});

function confirmDeposit(){
    var amount = Number(depositAmount);
    if(!amount){ return; }
    balance += amount;
    updateBalance();
    $(".deposit_message").show();
    $(".deposit_message").css({"color": "green", "display": "flex", "justify-content": "center", "font-size": "20px", "margin": "1.7rem"})
    depositAmount = "";
    showDeposit();
}

$(document).on("keydown", (e) => {
    if(e.key === "Enter" && $("#screen__deposit").is(":visible")){
        e.preventDefault();
        confirmDeposit();
    }
});

$(".deposit_form").on("submit", (e) => {
    e.preventDefault();
})