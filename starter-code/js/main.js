var userinput = {
    name: "ola",
    pass: 9854,
    baln : "500"

}

// numberbutton = document.querySelectorAll(".call_number");
function changeName(){
    $("p").html("Good Morning " + userinput.name + ", How are you today?")
}
var oprationbutton = document.querySelectorAll(".Operating_buttons")
var inPut = document.querySelector("#inp_num");
var outPut='';

    $(".call_number").click(function(){
        var value = $(this).val();
        if (value.length === 4) {
            
        }
        $("input").val(value);
    })


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


let container = document.querySelector("#Time")
function getTime(){
    let data = new Date()
    let year = data.getFullYear()//to make the second stel work

    let hour = data.getHours()
    let min = data.getMinutes()
    let sec = data.getSeconds()

time.textContent = hour + " : " + min + " : " + sec;
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
