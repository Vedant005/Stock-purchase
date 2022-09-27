var initialPrice = document.querySelector("#initial-price");
var stocksQuantity = document.querySelector("#stocks-quantity");
var currentPrice = document.querySelector("#current-price");
var submitBtn = document.querySelector("#submit-btn");
var outputBox = document.querySelector("#output-box");


function calculateProfitAndLoss(initial, quantity, current){

    if (initial > current){
      var loss = (initial - current)*quantity;
      var lossPercentage = (loss/initial) * 100;
      showOutput(' Hey, the loss is ${loss} and the percentage is ${losssPercentage}%');
    }
    else if ( curent > initial){
        var profit = (current - initial)* quantity;
        var profitPercentage = (profit/initial)*100;

        showOutput('Hey, the profit id ${profit} and the percentage is &{profitPercentage}% ');
    }
    else{
        showOutput(' NO PAIN,NO GAIN')
    }
}
function submitHandler(){
  var ip = Number(initialPrice.value);
  
  var qty = Number(stockQuanity.value);
  
  var curr = Number(currentlPrice.value);
  
    calculateProfitAndLoss(ip, qty, curr);
  
  }

  submitBtn.addEventListener("click", submitHandler);


function showOutput(message) {
    output.innerText = message;
  }



    