var initialPrice = document.querySelector("#initial-price");
var stocksQuantity = document.querySelector("#stocks-quantity");
var currentPrice = document.querySelector("#current-price");
var submitButton = document.querySelector("#submit-btn");
var outputBox = document.querySelector("#output");

function calculateProfitAndLoss(initial, quantity, current){
    if(initial > current){
        var loss = ((initial - current) * quantity).toFixed(2);
        var lossPercentage = ((loss*100) /initial)/quantity;
        outputBox.innerText = `Hey the loss is ${loss} and the percent is ${lossPercentage}%`;

    }
    else if(current > initial){
        var profit = ((current - initial) * quantity).toFixed(2);
        var profitPercentage = ((profit * 100) / initial)/quantity;
       outputBox.innerText =  `Hey the profit is ${profit} and the percent is ${profitPercentage}% for each stock`;

    }
    else{
        outputBox.innerText = `No Pain No gain`;

    }
}

function submitHandler(){
    var ip = initialPrice.value;
    var qty = stocksQuantity.value;
    var curr = currentPrice.value;
    if(ip >=1 && qty >=1 && curr >=1){
        calculateProfitAndLoss(ip, qty, curr);
    }
    else{
        outputBox.innerText = `Invalid Data entered!!!`
    }
    
}


submitButton.addEventListener("click", submitHandler)