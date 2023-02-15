function getPin (){
    const pin = generatePin();
    const pinString= pin + "";
    if(pinString.length=== 4){
        return pin;
    }
    else{
        return getPin();
    }
}

function generatePin (){
    const random = Math.floor(Math.random() * 1000000);
    return random;
}

document.getElementById("generate-pin").addEventListener("click",function(){
    const pin = getPin();
    // display pin 
    const displayPin = document.getElementById("display-pin");
    displayPin.value= pin;
})