var userinput = {
    name: "Ola",
    pin: 9854,
    baln: "500"
}

var input = document.getElementsByClassName("text_box"),
    output = null,
    number = Array.from(document.getElementsByClassName("pin_num")),
    select_num = null,
    cancel = document.getElementById("#pin_cancel_btn"),
    clear = document.getElementById("#pin_clear_btn"),
    enter = document.getElementById("#pin_enter_btn"),
    pin = userinput.pass,
    resultDisplay = false;



// function the_numbers() {
//     for (let r = 0; r < number.length; r++) {
//         for (let c = 0; c < 4; c++) {
//             let called_num = number[r][c];
//             $("#pin_enter_btn").click(() => {
//                 if (called_num[r][c] != userinput.pass) {
//                     $(".error_message").show();
//                 }
//                 else {
//                     $("#screen__pin").hide();
//                     $("#screen__landing").show();

//                 }
//             })
//         }
//     }
// }

function SelectedNumber() {
    if (select_num = null) {
        select_num = number;
    }
}

number.map(pin_num => {
    number.addEventListener('click', (e) => {
        console.log("cliked");
        console.log(e);
        console.log(e.target)
    })
})
console.log(selectNumber())
// Show and Hide pages

// $("#screen__landing").hide();
// $("#screen__balance").hide();
// $("#screen__withdrawal").hide();
// $("#screen__deposit").hide();



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

// Welcom Tag
$('.message-tap').append('<p>Good Morning ' + userinput.name + ', How are you today?</p>');

// The time
let currentDate = new Date();
let hours = currentDate.getHours();
let minutes = currentDate.getMinutes();
let day = currentDate.getDay();
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

$('.Time').append("<p>" + hours + ":" + minutes + " " + mid + "</p>");
$('.Date').append("<p>" + dated + "</p>");

// Tims
let container = document.querySelector(".Time")
function getTime() {
    let data = new Date()
    let year = data.getFullYear()//to make the second stel work

    let hour = data.getHours()
    let min = data.getMinutes()
    let sec = data.getSeconds()

    time.textContent = hour + " : " + min + " : " + sec;
}

// var oprationbutton = document.querySelectorAll(".Operating_buttons")
// var inPut = document.querySelector("#inp_num");
// var outPut = '';

// $(".call_number").click(function () {
//     var value = $(this).val();
//     if (value.length === 4) {
//         inPut.val(value);
//     }
//     $("input").val(value);
// })


// CallNum.click(function(e){
//     for(var i=0; i<4; i++){
//     $(this).addClass("Click")
//     outPut = $(this)[i].val()
//     inPut.innerText() += outPut[i].val()
//     }
//     // if(outPut.length == 4 ){

//     // }
//     // console.log($(this).val())
// })

// Back Button
$("#withdraw_back_btn").click(function () {
    $("#screen__withdrawal").hide();
    $("#screen__landing").show();
})

$("#deposit_back_btn").click(function () {
    $("#screen__deposit").hide();
    $("#screen__landing").show();
})

$("#balance_back_btn").click(() => {
    $("#screen__balance").hide();
    $("#screen__landing").show();
})