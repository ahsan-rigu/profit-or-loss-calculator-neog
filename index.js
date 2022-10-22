const inputPrice = document.querySelector("#input-price");
const inputQuantity = document.querySelector("#input-quantity");
const inputCurrent = document.querySelector("#input-current");
const buttonCalculate = document.querySelector("#button-calculate");
const outputMessage = document.querySelector("#output-message")

buttonCalculate.addEventListener("click", onClickHandeler);

function onClickHandeler(){
    profitLossCalculator(Number(inputPrice.value), Number(inputQuantity.value), Number(inputCurrent.value) )
}

function profitLossCalculator(price, quantity, current){
    if(!(price && quantity && current)){
        outputMessage.textContent = "all fields must be non zero...or maybe you lost everything"
     }  else{
        if(price>current){
            var loss = price*quantity - current*quantity ;
            var lossPercentage = loss/(price*quantity) * 100;
            outputMessage.textContent = "loss of " + loss + " or " + lossPercentage.toFixed(2) + "%";
            outputMessage.style.color = 'red';
            outputMessage.style.borderColor =  'red';
        }else if(price<current){
            var profit = current*quantity - price*quantity;
            var profitPercentage = profit/(price*quantity) * 100;
            outputMessage.textContent = "profit of " + profit + " or " + profitPercentage.toFixed(2) + "%";
            outputMessage.style.color = 'green';
            outputMessage.style.borderColor = 'green';
        } else {outputMessage.textContent = "no profit no loss.."; }

        }
     }




