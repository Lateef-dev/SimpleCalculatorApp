const operandsBtn = document.querySelectorAll("button[data-type=operand]");
const operatorsBtn = document.querySelectorAll("button[data-type=operator]");
const reset = document.querySelector("button[data-type=clear]");
const deleteBtn = document.querySelector("button[data-type=delete]");
const output = document.getElementById("output");
const body = document.querySelector("body");
const calcContainer = document.querySelector(".container");
const btn = document.querySelector(".theme__button");
const equalityBtn = document.querySelector(".calculator__btn--18");
const input = document.querySelector(".input[type=text]")
const btn1 = document.querySelector(".toggle--1")
const btn2 = document.querySelector(".toggle--2")
const btn3 = document.querySelector(".toggle--3")


let isOperator = false;

operandsBtn.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        output.value = "";
        if (output.value === "0") output.value = e.target.value;
         else if (output.value.includes(".") && e.target.value.includes(".")) output.value = output.value + "" + e.target.value.replace(".", "");
         else if (isOperator) {
            isOperator = false;
            output.value = e.target.value;
        } else if(output.value.length >= 15) return;
          else output.value = output.value + e.target.value;
    });
});

let equation = [];
operatorsBtn.forEach(btn => {
    btn.addEventListener("click", (e) => {
        switch(e.target.value) {
            case "=": 
                equation.push(output.value);
                output.value = eval(equation.join(""));
                equation = [];
                break;

            default :
                let lastItem = equation[equation.length - 1];

                if (["*", "+", "-", "/"].includes(lastItem) && isOperator){
                    equation.pop();
                    equation.push(e.target.value);
                } 
                
                else {
                    equation.push(output.value);
                    equation.push(e.target.value);
                }

                isOperator = true;
                break;
        }
    });
});

reset.addEventListener("click", (e) => {
    output.value = "";
    clearTheme();
})

deleteBtn.addEventListener("click", (e) => {
    output.value = output.value.slice(0, -1);
})

const btnStyle = {
    theme2: {
        backgroundColor : "hsl(45, 7%, 89%)",
        boxShadow : "0px .4rem hsl(35, 11%, 61%)",
        color : "hsl(60, 10%, 19%)"
    },
    theme3: {
        backgroundColor:  "hsl(268, 47%, 21%)",
        color:  "hsl(52, 100%, 62%)",
        boxShadow:  "0px .4rem hsl(290, 70%, 36%)"
    }  
    }

const clearTheme = function() {
    document.querySelector(".heading--4").style.color = "";
    document.querySelector(".heading--6").style.color = "";
    input.style.color = ""; 
    document.querySelector(".button__container").style.backgroundColor = "";
    document.querySelector(".container__bottom").style.backgroundColor = "";
    input.style.backgroundColor = "";
    btn.style.backgroundColor =  "" ;
    body.style.backgroundColor = "";
    operandsBtn.forEach(btn =>{
     btn.style.backgroundColor = "",
     btn.style.boxShadow = "",
     btn.style.color = ""
    }
     );
    operatorsBtn.forEach(btn => {
        btn.style.backgroundColor = "",
        btn.style.boxShadow = "",
        btn.style.color = ""}
        );
    [reset, deleteBtn].forEach(btn => {
      btn.style.backgroundColor = "" 
      btn.style.boxShadow = "";
  })
    equalityBtn.style.backgroundColor = "";
    equalityBtn.style.color = "";
    equalityBtn.style.boxShadow = "";
}

const theme2 = function () {
  document.querySelector(".heading--4").style.color = "black";
  document.querySelector(".heading--6").style.color = "black";
  input.style.color = "hsl(0, 0%, 0%)"; 
  document.querySelector(".button__container").style.backgroundColor = "hsl(0, 5%, 81%)";
  document.querySelector(".container__bottom").style.backgroundColor = "hsl(0, 5%, 81%)";
  input.style.backgroundColor = "hsl(0, 0%, 93%)";
  btn.style.backgroundColor =  "hsl(25, 98%, 40%)" ;
  body.style.backgroundColor = "hsl(0, 0%, 90%)";
  operandsBtn.forEach(btn => { Object.assign(btn.style, btnStyle.theme2) });
  operatorsBtn.forEach(btn => { Object.assign(btn.style, btnStyle.theme2) });
  [reset, deleteBtn].forEach(btn => {
    btn.style.backgroundColor = "hsl(185, 42%, 37%)" 
    btn.style.boxShadow = "0 .4rem hsl(185, 58%, 25%)";
})
  equalityBtn.style.backgroundColor = "hsl(25, 98%, 40%)";
  equalityBtn.style.color = "hsl(0, 0%, 100%)";
  equalityBtn.style.boxShadow = "0px .4rem hsl(25, 99%, 27%)";
}

//THEME 3
const theme3 = function() {
    document.querySelector(".heading--4").style.color = "hsl(52, 100%, 62%)";
    document.querySelector(".heading--6").style.color = "hsl(52, 100%, 62%)";
    input.style.color = "hsl(52, 100%, 62%)"; 
    document.querySelector(".button__container").style.backgroundColor = "hsl(268, 71%, 12%)";
    document.querySelector(".container__bottom").style.backgroundColor = "hsl(268, 71%, 12%)";
    input.style.backgroundColor = "hsl(268, 71%, 12%)";
    btn.style.backgroundColor =  "hsl(176, 100%, 44%)";
    body.style.backgroundColor = "hsl(268, 75%, 9%)";
    operandsBtn.forEach(btn => { Object.assign(btn.style, btnStyle.theme3) });
    operatorsBtn.forEach(btn => { Object.assign(btn.style, btnStyle.theme3) });

    [reset, deleteBtn].forEach(btn => {
        btn.style.backgroundColor = "hsl(281, 89%, 26%)"
        btn.style.boxShadow = "0px .4rem hsl(285, 91%, 52%)";
    }
);
    equalityBtn.style.backgroundColor = "hsl(176, 100%, 44%)";
    equalityBtn.style.color = "hsl(0, 0%, 0%)";
    equalityBtn.style.boxShadow = "0px .4rem hsl(177, 92%, 70%)";
}

let toggleSwitch = document.querySelector('.theme__button');

    function go_to_1() {
      toggleSwitch.classList.remove('slide2');
      toggleSwitch.classList.remove('slide3');
      toggleSwitch.classList.add('slide1');
      clearTheme();
    }

    function go_to_2() {
      toggleSwitch.classList.remove('slide3');
      toggleSwitch.classList.remove('slide1');
      toggleSwitch.classList.add('slide2');
      theme2();
    }

    function go_to_3() {
      toggleSwitch.classList.add('slide3');
      toggleSwitch.classList.remove('slide2');
      toggleSwitch.classList.remove('slide1');
      theme3();
    }

    btn1.addEventListener("click", go_to_1);
    btn2.addEventListener("click", go_to_2);
    btn3.addEventListener("click", go_to_3);



