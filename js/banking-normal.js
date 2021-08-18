
//---------------------------- Deposit part --------------------

// call the button by id 
document.getElementById('deposit-button').addEventListener('click', function () {
    
    // taking input from input field
    const depositInput = document.getElementById('deposit-input');

    const depositAmountText = depositInput.value;
    // convert
    const depositAmount = parseFloat(depositAmountText);
    // console.log(depositAmount);

    //  get / update  current deposit 
    const depositTotal = document.getElementById('deposit-total');
    //convert
    const previousDepositTotalText = depositTotal.innerText;

    const previousDepositTotal = parseFloat(previousDepositTotalText);

   
    // showing current deposit
    // depositTotal.innerText = depositAmount

    // calculation
    depositTotal.innerText = previousDepositTotal + depositAmount;
    

    // clear the input field
    
    depositInput.value = '';

    // ------------------------------ deposit balance part      --------------------

    // call the balance total section
    const balanceTotal = document.getElementById('balance-total');

    // convert
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);

    //calculation
    balanceTotal.innerText = previousBalanceTotal + depositAmount;

});


//------------------------------    withdraw section     --------------------------

// call the button by id 
document.getElementById('withdraw-button').addEventListener('click', function () {
    
    // taking input from input field
    const withdrawInput = document.getElementById('withdraw-input');
    

    const withdrawAmountText = withdrawInput.value;
     
    // convert
    const withdrawAmount = parseFloat(withdrawAmountText);
     
    // update withdraw total
     const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawTotalText = withdrawTotal.innerText;
    // convert 
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalText);


     // calculation
     withdrawTotal.innerText = previousWithdrawTotal + withdrawAmount;
    

     // clear the input field
     
    withdrawInput.value = '';
    
    //------------------------------    withdraw balance section     ----------------------

    // call the balance total section
    const balanceTotal = document.getElementById('balance-total');

 // convert
 const balanceTotalText = balanceTotal.innerText;
 const previousBalanceTotal = parseFloat(balanceTotalText);
    
      //calculation
      balanceTotal.innerText = previousBalanceTotal - withdrawAmount;
})



