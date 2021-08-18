 
 //--------------------------     PRACTISE    ----------------------------
 
 
 // call the button and make it clickable
document.getElementById('deposit-button').addEventListener('click', function () {
    // taking input
    const depositInput = document.getElementById('deposit-input');
    //value
    const depositAmountText = depositInput.value;
    //convert
    const depositAmount = parseFloat(depositAmountText);
    //update deposit amount
    const depositTotal = document.getElementById('deposit-total');
    // value
    const previousDepositTotalText = depositTotal.innerText;
    // console.log(previousDepositTotalText);
    //convert
    const previousDepositTotal = parseFloat(previousDepositTotalText);
    // depositTotal.innerText = depositAmount;
    // calculation
    depositTotal.innerText = previousDepositTotal + depositAmount;

    // clear 
    depositInput.value ='';

    //------------------------  deposit balance ----------------------
    // call the id 
    const balanceTotal = document.getElementById('balance-total');
    // take the value
    const balanceTotalText = balanceTotal.innerText;
    // convert
    const previousBalanceTotal = parseFloat(balanceTotalText);
    // calculation
    balanceTotal.innerText = previousBalanceTotal + depositAmount;


})

// -------------------------- withdraw part   ------------------ 

// call the button make it clickable
document.getElementById('withdraw-button').addEventListener('click',function () {
    // taking input
    const withdrawInput = document.getElementById('withdraw-input');
    // input value
    const withdrawTotalText = withdrawInput.value;
    //convert
    const withdrawAmount = parseFloat(withdrawTotalText);
    // console.log(withdrawAmount);
    // update amount
    const withdrawTotal = document.getElementById('withdraw-total');
    // taking value
    const previousWithdrawTotalText = withdrawTotal.innerText;
    //convert
    const previosuWithdrawTotal = parseFloat(previousWithdrawTotalText);
    //calculation
    withdrawTotal.innerText = previosuWithdrawTotal + withdrawAmount;
    //clear
    withdrawInput.value = '';

    // -------------------------- withdraw part   ------------------ 

    //call the id
    const balanceTotal = document.getElementById('balance-total');
    // take the value
    const balanceTotalText = balanceTotal.innerText;
    //convert
    const previousBalanceTotal = parseFloat(balanceTotalText);
    // calculation
    balanceTotal.innerText = previousBalanceTotal - withdrawAmount;
})





