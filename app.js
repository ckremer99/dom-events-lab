/*-------------------------------- Constants --------------------------------*/
const buttons = document.querySelectorAll(".button");
const calculator = document.querySelector("#calculator");
const display = document.querySelector(".display");

/*-------------------------------- Variables --------------------------------*/
let number;
let character;
/*------------------------ Cached Element References ------------------------*/

/*----------------------------- Event Listeners -----------------------------*/
buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    // This log is for testing purposes to verify we're getting the correct value
    console.log(event.target.innerText);
    // Future logic to capture the button's value would go here...

    if (["+", "-", "/", "*", "=", "C"].includes(event.target.innerText)) {
      //! CLICKED A CHARACTER
      if (event.target.innerText === "C") {
        display.innerText = "";

      } else if (event.target.innerText === "=") {
        let result = calculate(display.innerText);
        display.innerText = result;

      } else {
         display.innerText += " " + event.target.innerText + " ";
      }
    } else {
      //! CLICKED A NUMBER
      display.innerText += event.target.innerText;
    }
    // * Parse a string and get it into different values
  });
});

/*-------------------------------- Functions --------------------------------*/

function calculate(ExpressionString) {
  // split string into parts
  valueArray = ExpressionString.split(" ");
  numA = Number(valueArray[0]);
  numB = Number(valueArray[2]);
  operation = valueArray[1];
  switch (operation) {
    case "+":
      return numA + numB;
    case "-":
      return numA - numB;
    case "/":
      return numA / numB;
    case "*":
      return numA * numB;
  }
}
