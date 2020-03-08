var userinput = {
    name: "ola",
    pass: 9854,
    baln : "500"

}

$("<div id = 'container'></div>").appendTo('#screen__pin')

$("<div id = 'intnum'></div>").appendTo('#container')
$("<p id='inp_num'> </p>").appendTo("#intnum")

$("<div id = 'PinStyle'></div>").appendTo('#container')
$("<button id='1' value='1'>1</button>").appendTo("#PinStyle")
$("<button id='2' value='2'>2</button>").appendTo("#PinStyle")
$("<button id='3' value='3'>3</button>").appendTo("#PinStyle")
//Cancle Button
$("<button id='cancel'>cancle</button>").appendTo("#PinStyle")
$("<button id='4' value='4'>4</button>").appendTo("#PinStyle")
$("<button id='5' value='5'>5</button>").appendTo("#PinStyle")
$("<button id='6' value='6'>6</button>").appendTo("#PinStyle")
//Clear Button
$("<button id='clear'>clear</button>").appendTo("#PinStyle")
$("<button id='7' value='7'>7</button>").appendTo("#PinStyle")
$("<button id='8' value='8'>8</button>").appendTo("#PinStyle")
$("<button id='9' value='9'>9</button>").appendTo("#PinStyle")
//Enter Button
$("<button id='enter'>enter</button>").appendTo("#PinStyle")
$("<button></button>").appendTo("#PinStyle")
$("<button id='0' value='0'>0</button>").appendTo("#PinStyle")
$("<button></button>").appendTo("#PinStyle")

//The Logo
$("<div id = 'pic'></div>").appendTo('#screen__pin')
$("<img src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Al_Rajhi_Bank_Logo.svg/2000px-Al_Rajhi_Bank_Logo.svg.png'>").appendTo('#pic')

//Withdrawal Screen
$("<div id = 'Clock'></div>").appendTo("#screen__landing")
$("<h3 id = 'time'></h3>").appendTo("#Clock")

$("<div id = 'LogIn'></div>").appendTo("#screen__landing")
$("<div id = 'User_Name'></div>").appendTo("#LogIn")
$("<p id = 'Hi'>Good Morning Ola, How are you to day?</p>").appendTo("#User_Name")

$("<div id = 'container2'></div>").appendTo("#screen__landing")
$("<div id = 'Withdrawal_Nump'>SAR </div>").appendTo("#container2")
$("<div id = 'balancce'></div>").appendTo("#container2")
$("<button id = 'Withdrawal_but'></button>").appendTo("#container2")
$("<button id = 'deposit_but'></button>").appendTo("#container2")

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

