
let generateBtn = document.getElementById("generateBtn");
generateBtn.addEventListener("click",function(){
    var randomCode = Math.floor(1000 + Math.random() * 9000);
    document.getElementById("codeInput").value = randomCode;
    document.getElementById("notifyMatch").style.display = "none";
    document.getElementById("notifywrong").style.display = "none";
    
})


let userPin = document.getElementsByClassName("form-control")[1];


let userPinValue = "";
const keys = document.querySelectorAll(" .button");
keys.forEach(function (key) {
    key.addEventListener('click', e => {
        const action = e.target.dataset.action;
        if (action == "clear") {
            userPinValue = "";
            userPin.value = userPinValue;
        } else if (action == "back") {
            userPinValue = userPinValue.substring(0, userPinValue.length - 1);
            userPin.value = userPinValue;

        } else if (e.target.className == "button") {
            userPinValue += e.target.innerHTML;
            userPin.value = userPinValue;

        }
    })

})


let submitButton = getElement(".submit-btn");
let totalTry = 1;
//let alert = getElement(".action-left");
submitButton.addEventListener('click', function () {
    randomCode =  document.getElementById("codeInput").value;
    console.log(randomCode);
    userPinValue = userPin.value;
    if (totalTry <= 3) {
        document.querySelector(".action-left").innerHTML = `${3 - totalTry} try left`;
       // alert.innerHTML = (3 - totalTry) + " try left";
        if(randomCode == userPinValue){
            document.getElementById("notifyMatch").style.display = "block";
        }else{
             document.getElementById("notifywrong").style.display = "block";
             totalTry += 1;
        }
    }else {
        submitButton.disabled = true;
    }
   // document.querySelector(".action-left").innerHTML = `${3 - totalTry} try left`;
    
  
    userPinValue = "";
    document.getElementById("output").value = "";
    document.getElementById("codeInput").value = "";

})

function getElement(elementClass) {
    let element = document.querySelector(elementClass);
    return element;
}