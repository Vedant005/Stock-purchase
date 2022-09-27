const initialPrice = document.querySelector("#initial-price");
const stocksQuantity = document.querySelector("#stocks-quantity");
const currentPrice = document.querySelector("#current-price");
const submitBtn = document.querySelector("#submit-btn");
const outputBox = document.querySelector("#output-box");

submitBtn.addEventListener('click',submitHandler);
function submitHandler(){
const ip = Number(initialPrice.value);

const qty = Number(stockQuanity.value);

const curr = Number(currentlPrice.value);

  calculateProfitAndLoss(ip,qty,curr);

}
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

function showOutput(message) {
    output.innerText = message;
  }



    