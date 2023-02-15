function getPin() {
  const pin = generatePin();
  const pinString = pin + "";
  if (pinString.length === 4) {
    return pin;
  } else {
    return getPin();
  }
}

function generatePin() {
  const random = Math.floor(Math.random() * 1000000);
  return random;
}

document.getElementById("generate-pin").addEventListener("click", function () {
  const pin = getPin();
  // display pin
  const displayPin = document.getElementById("display-pin");
  displayPin.value = pin;
});

document
  .getElementById("calculator")
  .addEventListener("click", function (event) {
    const typedNumberField = document.getElementById("typed-numbers");
    const previousTypedNumber = typedNumberField.value;
    const number = event.target.innerText;
    if (isNaN(number)) {
      if (number === "C") {
        typedNumberField.value = "";
      } else if (number === "<") {
        const digits = previousTypedNumber.split("");
        digits.pop();
        const remainingDigits = digits.join("");
        typedNumberField.value = remainingDigits;
      }
    } else {
      const newTypedNumber = previousTypedNumber + number;
      typedNumberField.value = newTypedNumber;
    }
  });

document.getElementById("verify-pin").addEventListener("click", function (){
const displayPinField = document.getElementById("display-pin");
const currentPin = displayPinField.value;

const typedNumberField = document.getElementById("typed-numbers");
const typedNumber = typedNumberField.value;

 const pinSuccessMessage = document.getElementById("pin-success");
 const pinFailureMessage = document.getElementById("pin-failure");
if(typedNumber===currentPin){
   
    pinSuccessMessage.style.display = "block";
    pinFailureMessage.style.display = "none";
}
else{
    
    pinFailureMessage.style.display = "block";
    pinSuccessMessage.style.display = "none";
}
})