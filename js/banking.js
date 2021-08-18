
/* function doubleIt(num) {
    const result = num * 2;
    return result;
}
const first = doubleIt(5);
const second = doubleIt(7); */

//--------------     function of deposit && withdraw input   --------------------

function getInputValue(inputId) {
     // call the id from input field
     const inputField = document.getElementById(inputId);
    // value
     const inputAmountText = inputField.value;
     // convert
    const amountValue = parseFloat(inputAmountText);
       
    // clear the input field
       inputField.value = '';
    
    return amountValue;
}

//---------------------------     get and update deposit and withdraw   --------------------

function updateTotalField(totalFieldId, amount) {
    //  debugger;
    //  get and update  current  by calling id  
    const totalElement = document.getElementById(totalFieldId);
    // taking the text
    const totalText = totalElement.innerText;
    //convert
    const previousTotal = parseFloat(totalText); 
    // calculation
    totalElement.innerText = previousTotal + amount;
    

}
// -----------------------     current balance ------------

function getCurrentBalance() {
    // call the balance total section
    const balanceTotal = document.getElementById('balance-total');

    // value
    const balanceTotalText = balanceTotal.innerText;
    // convert
    const previousBalanceTotal = parseFloat(balanceTotalText);
    
    return previousBalanceTotal;
}
//---------------------------    update balance   --------------------


function updateBalance(amount,isAdd) {
    // call the balance total section
    const balanceTotal = document.getElementById('balance-total');
/*
    const balanceTotalText = balanceTotal.innerText;
    // convert
    const previousBalanceTotal = parseFloat(balanceTotalText); */

    //calculation with condition
    const previousBalanceTotal = getCurrentBalance();
    if (isAdd == true) {
        balanceTotal.innerText = previousBalanceTotal + amount;

    }
    else {
        balanceTotal.innerText = previousBalanceTotal - amount;

    }
}



//---------------------------- Deposit part --------------------

// call the button by id 
document.getElementById('deposit-button').addEventListener('click', function () {

    const depositAmount = getInputValue('deposit-input');

    // amount deposit condition 
    if (depositAmount > 0) {
        updateTotalField('deposit-total',depositAmount);
        updateBalance(depositAmount, true);
    }

   /*  // taking input from input field
    const depositInput = document.getElementById('deposit-input');

    const depositAmountText = depositInput.value;
    // convert
    const depositAmount = parseFloat(depositAmountText); */
    // console.log(depositAmount);
    
    /* //  get and update  current deposit 
    const depositTotal = document.getElementById('deposit-total');
    // taking the text
    const previousDepositTotalText = depositTotal.innerText;
    //convert
    const previousDepositTotal = parseFloat(previousDepositTotalText);
 
    // showing current deposit
    // depositTotal.innerText = depositAmount

    // calculation
    depositTotal.innerText = previousDepositTotal + depositAmount;
    */
    
 

    // ------------------------------ deposit balance part      --------------------

  /*   // call the balance total section
    const balanceTotal = document.getElementById('balance-total');

    // convert
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);

    //calculation
    balanceTotal.innerText = previousBalanceTotal + depositAmount;

*/
    
});
    
    

//------------------------------    withdraw section     --------------------------

// call the button by id 
document.getElementById('withdraw-button').addEventListener('click', function () {

    const withdrawAmount = getInputValue('withdraw-input');
    const currentBalance = getCurrentBalance();

    // amount withdraw condition
    if (withdrawAmount > 0 && withdrawAmount < currentBalance) {
        updateTotalField('withdraw-total', withdrawAmount);
    updateBalance(withdrawAmount, false)
    }
    if (withdrawAmount > currentBalance) {
        console.log(" ai tor poket a taka ase koto ha ?")
    }
    

   /*  // taking input from input field
    const withdrawInput = document.getElementById('withdraw-input');
    
    const withdrawAmountText = withdrawInput.value;  
    // convert
    const withdrawAmount = parseFloat(withdrawAmountText); */

    
     /*
    // get and update withdraw total
     const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawTotalText = withdrawTotal.innerText;
    // convert 
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalText);
     // calculation
     withdrawTotal.innerText = previousWithdrawTotal + withdrawAmount;
     
     // clear the input field 
    withdrawInput.value = ''; 
    */
    
    
    
    //------------------------------    withdraw balance section     ----------------------

    /* // call the balance total section
    const balanceTotal = document.getElementById('balance-total');

    // convert
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
        
      //calculation
    balanceTotal.innerText = previousBalanceTotal - withdrawAmount;
     */
    
})



