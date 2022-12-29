function Calculate(num1, num2, op) {
  switch (op) {
    case "+":
      return parseFloat(num1) + parseFloat(num2);
      break;
    case "-":
      return parseFloat(num1) - parseFloat(num2);
      break;
    case "*":
      return parseFloat(num1) * parseFloat(num2);
      break;
    case "/":
      return parseFloat(num1) / parseFloat(num2);
      break;
  }
}

let result = document.querySelector(".result");

let operation = document.querySelector(".operation");

document.querySelector("#clear").addEventListener("click", function () {
  result.innerHTML = "";
  operation.innerHTML = "";
});

let n1;
let n2;
let answer;

const num_btns = document.querySelectorAll(".nmbr");

// console.log(num_btns);

function parse(a) {
  let arr = [];
  arr.push(a);
}

for (let i = 0; i < num_btns.length; i++) {
  num_btns[i].addEventListener("click", () => {
    let result = document.querySelector(".result");
    // console.log(num_btns[i].innerHTML);
    result.innerHTML = num_btns[i].innerHTML;
  });
}
