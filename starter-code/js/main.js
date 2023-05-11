var userinput = {
    name: "ola",
    pass: 9854,
    baln: "500"

}

// numberbutton = document.querySelectorAll(".call_number");

// Welcom Tag
$('#message-tap').append('<p>Good Morning ' + userinput.name + ', How are you today?</p>');

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

$('#Time').append("<p>" + hours + ":" + minutes + " " + mid + "</p>");
$('#Date').append("<p>" + dated + "</p>");

// Tims
let container = document.querySelector("#Time")
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

// $("#screen__landing").hide();
$("#enter").click(() => {
    $("#screen__pin").hide();
})


function PIN() {
    for (let i = 0; i < (userinput.length) - 3; i++) {
        $("#" + i).click(function (e) {
            if (pass.length < 4) {
                var numLis = e.target.value
                $("#inp_num").html(numLis)
                $("#inp_num").show()
                $("screen__pin").hide()
            }
            else {
                console.log("Pleas agin")
            }
            $("#screen__landing").show()
        })
    }
}
