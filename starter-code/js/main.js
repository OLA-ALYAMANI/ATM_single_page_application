var userinput = {
    name: "ola",
    pass: 9854,
    baln : "500"

}
$("#screen__pin").append("<span id = 'To_Right'></span>")

$("<span id = 'container'></span>").appendTo('#To_Right')
$("<span id = 'ThePin'></span>").appendTo('#container')
$("<p id='inp_num'></p>").appendTo("#ThePin")

$("<span id = 'pin_button'></span>").appendTo('#container')
$("<button class='call_number' id='1' value='1'>1</button>").appendTo("#pin_button")
$("<button class='call_number' id='2' value='2'>2</button>").appendTo("#pin_button")
$("<button class='call_number' id='3' value='3'>3</button>").appendTo("#pin_button")
$("<button class='call_number' id='4' value='4'>4</button>").appendTo("#pin_button")
$("<button class='call_number' id='5' value='5'>5</button>").appendTo("#pin_button")
$("<button class='call_number' id='6' value='6'>6</button>").appendTo("#pin_button")
$("<button class='call_number' id='7' value='7'>7</button>").appendTo("#pin_button")
$("<button class='call_number' id='8' value='8'>8</button>").appendTo("#pin_button")
$("<button class='call_number' id='9' value='9'>9</button>").appendTo("#pin_button")
$("<div class='call_number'></div>").appendTo("#pin_button")
$("<button class='call_number' id='0' value='0'>0</button>").appendTo("#pin_button")
$("<div class='call_number'></div>").appendTo("#pin_button")

<<<<<<< HEAD
var CallNum = $(".call_number")
var inPut = $("#inp_num")
var outPut

CallNum.click(function(e){
    for(var i=0; i<4; i++){
    $(this).addClass("Click")
    outPut = $(this)[i].val()
    inPut.innerText() += outPut[i].val()
    }
    // if(outPut.length == 4 ){
        
    // }
    // console.log($(this).val())
})
=======
// var CallNum = $(".call_number")
// var inPut = $("#inp_num").text()
// var outPut

// CallNum.click(function(e){
//     for(var i=0; i<4; i++){
//     $(this).val().addClass(".Click")
//     outPut[i] += $(this)[i].text()
//     inPut += outPut[i]
//     }
//     // if(outPut.length == 4 ){
        
//     // }
//     // console.log($(this).val())
// })
>>>>>>> d239ae780a543adff408f4553fb7e6762883878d

//Cancle Button, Clear Button and Enter Button
$("#container").append("<span id = 'command_span'></span>")
$("<button class='command_button' id='clear'></button>").appendTo("#command_span")
$("<button class='command_button' id='cancle'></button>").appendTo("#command_span")
$("<button class='command_button' id='enter'></button>").appendTo("#command_span")

$("#clear").append("<p id='Yellow'></p>")
$("#cancle").append("<p id='Red'></p>")
$("#enter").append("<p id='Green'></p>")
//The Logo
$("#screen__pin").append("<span id = 'To_Left'></span>")
$("<span id = 'Logo'></span>").appendTo('#To_Left')
$("<img src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Al_Rajhi_Bank_Logo.svg/2000px-Al_Rajhi_Bank_Logo.svg.png'>").appendTo('#Logo')

//Withdrawal Screen
// $("<div id = 'Clock'></div>").appendTo("#screen__landing")
// $("<h3 id = 'time'></h3>").appendTo("#Clock")

// $("<div id = 'LogIn'></div>").appendTo("#screen__landing")
// $("<div id = 'User_Name'></div>").appendTo("#LogIn")
// $("<p id = 'Hi'>Good Morning Ola, How are you to day?</p>").appendTo("#User_Name")

// $("<div id = 'container2'></div>").appendTo("#screen__landing")
// $("<div id = 'Withdrawal_Nump'>SAR </div>").appendTo("#container2")
// $("<div id = 'balancce'></div>").appendTo("#container2")
// $("<button id = 'Withdrawal_but'></button>").appendTo("#container2")
// $("<button id = 'deposit_but'></button>").appendTo("#container2")

let container = document.querySelector("#time")
function getTime(){
    let data = new Date()
    let year = data.getFullYear()//to make the second stel work

    let hour = data.getHours()
    let min = data.getMinutes()
    let sec = data.getSeconds()

time.textContent =hour + " : " + min + " : " + sec
}

function PIN(){
for(let i=0; i<(userinput.length)-3; i++){
    $("#"+i).click(function(e) {
        if(pass.length < 4){
        var numLis = e.target.value
        $("#inp_num").html(numLis)
        $("#inp_num").show()
        $("screen__pin").hide()
        
    }
    else{
        console.log("Pleas agin")
    }
    $("#screen__landing").show()
    })
}
}
