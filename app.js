let redBar = document.querySelector("#progress-bar .bar.red");
let greenBar = document.querySelector("#progress-bar .bar.green");
let greyBar = document.querySelector("#progress-bar .bar.grey");




let succeedCheckboxes = document.querySelectorAll(".succeedBtn");
let failedCheckboxes = document.querySelectorAll(".failedBtn");
let succeedPercentage = document.querySelector("#succeed");
let failedPercentage = document.querySelector("#failed");
let notCompletePercentage = document.querySelector("#notComplete");
let b;
let c;
let d;
redBar.style.width = "0%"
greenBar.style.width = "0%";
greyBar.style.width = "100%";

function calculate() {
  b = 0;
  c = 0;
  
  succeedCheckboxes.forEach((item) => {
    if (item.checked) b = b + 1;
  });
  failedCheckboxes.forEach((item) => {
    if (item.checked) c = c + 1;
  });
  let resultSucceed = (b * 100) / 13;
  let resultFailed = (c * 100) / 13;
  succeedPercentage.innerHTML = resultSucceed.toFixed(1);
  succeedPercentage.innerHTML += "% "
  greenBar.style.width = `${resultSucceed}%`;
  failedPercentage.innerHTML = resultFailed.toFixed(1);
  failedPercentage.innerHTML += "% "
  redBar.style.width = `${resultFailed}%`;
 notCalculate()
}
let i
function notCalculate() {
    d = 0;
    
  for ( i = 0; i < 13; i++) {
      if (!succeedCheckboxes[i].checked && !failedCheckboxes[i].checked) {d = d + 1;
        console.log(i);
    }}
    
    let notComplete = (d * 100) / 13;
    notCompletePercentage.innerHTML = notComplete.toFixed(1);
    notCompletePercentage.innerHTML += "% ";
    greyBar.style.width = `${notComplete}%`;
}

 
