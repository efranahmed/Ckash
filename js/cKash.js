// //  cash in start
// let cashInButton = document.getElementById("cashin_button");
// let totalBalance = document.getElementById("total_balance");

// let cashInInput = document.getElementById("cash_in");
// cashInButton.addEventListener("click", function () {
//   let cashInConvert = parseFloat(cashInInput.value);
//   let totalBalanceConvert = parseFloat(totalBalance.innerText);

//   totalBalance.innerHTML = cashInConvert + totalBalanceConvert;
//   cashInInput.value = "";
// });
// //  cash in end

// //  cash out start
// let cashOutButton = document.getElementById("cash_out");
// let totalChashOut = document.getElementById("total_cashout");

// let cashOutInput = document.getElementById("cash_out_input");

// cashOutButton.addEventListener("click", function () {
//   let cashOutconvert = parseFloat(cashOutInput.value);
//   let totalChashOutconvert = parseFloat(totalChashOut.innerText);
//   let updateCashOut = cashOutconvert + totalChashOutconvert;
//   totalChashOut.innerHTML = updateCashOut;

//   let updateTotalBalance = totalBalance.innerText - updateCashOut;
//   totalBalance.innerHTML = updateTotalBalance;
//   cashOutInput.value = "";
// });
// //  cash out end

// //  cash send money start
// let sendMoneyButton = document.getElementById("sendmoney_button");
// let sendMoneyInput = document.getElementById("sendmoney_input");
// let totalSendMOney = document.getElementById("send_money");

// sendMoneyButton.addEventListener("click", function () {
//   let sendMoneyConvert = parseFloat(sendMoneyInput.value);
//   let totalSendMOneyConvert = parseFloat(totalSendMOney.innerText);
//   let updateSendMoney = sendMoneyConvert + totalSendMOneyConvert;
//   totalSendMOney.innerHTML = updateSendMoney;

//   let updateTotalBalance = totalBalance.innerText - updateSendMoney;
//   totalBalance.innerHTML = updateTotalBalance;
//   sendMoneyInput.value = "";
// });
// //  cash send money end

// //  cash mobile recharge start
// let mobileRecharge = document.getElementById("mobile_recharge");
// let mobileButton = document.getElementById("mobile_rechargebutton");

// let mobileInput = document.getElementById("mobile_input");

// mobileButton.addEventListener("click", function () {
//   let mobileConvert = parseFloat(mobileRecharge.innerText);
//   let mobileInputcon = parseFloat(mobileInput.value);

//   let updateMobile = mobileConvert + mobileInputcon;
//   mobileRecharge.innerHTML = updateMobile;
//   let updateTotalBalance = totalBalance.innerHTML - updateMobile;

//   totalBalance.innerHTML = updateTotalBalance;
//   mobileInput.vlaue = "";
// });
// //  cash send mobile recharge end

function inputNumber(intputFeild) {
  let getInput = document.getElementById(intputFeild);
  let inputConvert = parseFloat(getInput.value);

  return inputConvert;
}
function totalNumber(intputFeild) {
  let getTotal = document.getElementById(intputFeild);
  let totalConvert = parseFloat(getTotal.innerText);

  return totalConvert;
}
// cashin start
document.getElementById("cashin_button").addEventListener("click", function () {
  let totalAmount = totalNumber("total_balance");
  let cashInAmount = inputNumber("cash_in");

  let previousTotalAmount = document.getElementById("total_balance");
  previousTotalAmount.innerHTML = cashInAmount + totalAmount;
  let cashINInputFeild = document.getElementById("cash_in");
  cashINInputFeild.value = "";
});
// cash in end

// cash out start
document.getElementById("cash_out").addEventListener("click", function () {
  let totalCashOut = totalNumber("total_cashout");
  let cashOutAmount = inputNumber("cash_out_input");
  let previousCashOutAmount = document.getElementById("total_cashout");
  let updateCashOut = totalCashOut + cashOutAmount;
  previousCashOutAmount.innerHTML = updateCashOut;

  let cashOutInput = document.getElementById("cash_out_input");
  cashOutInput.value = "";

  let previousTotalAmount = document.getElementById("total_balance");
  let updateBalance = previousTotalAmount.innerHTML - cashOutAmount;
  previousTotalAmount.innerHTML = updateBalance;
});
// cash out end

// sendmoney start
document
  .getElementById("sendmoney_button")
  .addEventListener("click", function () {
    let totalSend = totalNumber("send_money");
    let sendAmount = inputNumber("sendmoney_input");
    let previousSendAmount = document.getElementById("send_money");
    let updateSend = totalSend + sendAmount;
    previousSendAmount.innerHTML = updateSend;

    let sendInput = document.getElementById("sendmoney_input");
    sendInput.value = "";

    let previousTotalAmount = document.getElementById("total_balance");
    let updateBalance = previousTotalAmount.innerHTML - sendAmount;
    previousTotalAmount.innerHTML = updateBalance;
  });
// sendmoney end

// recharge start
document
  .getElementById("mobile_rechargebutton")
  .addEventListener("click", function () {
    let totalRecharge = totalNumber("mobile_recharge");
    let rechargeAmount = inputNumber("mobile_input");
    let previousRechargeAmount = document.getElementById("mobile_recharge");
    let updateRecharge = totalRecharge + rechargeAmount;
    previousRechargeAmount.innerHTML = updateRecharge;

    let rechargeInput = document.getElementById("mobile_input");
    rechargeInput.value = "";

    let previousTotalAmount = document.getElementById("total_balance");
    let updateBalance = previousTotalAmount.innerHTML - rechargeAmount;
    previousTotalAmount.innerHTML = updateBalance;
  });
// recharge end
