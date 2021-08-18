
//---------------------------        PRACTISE      -------------------------------


//--------------     function of deposit && withdraw input   --------------------

function getInputValue(inputId) {
    //taking input
    const inputField = document.getElementById(inputId);
    //value
    const inputAmountText = inputField.value;
    //convert
    const amountValue = parseFloat(inputAmountText);
    //clear
    inputField.value = '';

     return amountValue;
}


//--------------------- update deposit && withdraw total field --------------------

function updateTotalField(totalFieldId, amount) {
    // debugger;
    // call the id
    const totalElement = document.getElementById(totalFieldId);
    //taking the text
    const totalText = totalElement.innerText;
    //convert
    const previousTotal = parseFloat(totalText);
    //calculation
    totalElement.innerText = previousTotal + amount;
}



//---------------------------- current Balance --------------------

function getCurrentBalance() {
    //call the id of balance
    const totalBalance = document.getElementById('balance-total');
    //taking the value
    const balanceTotalText = totalBalance.innerText;
    //convert
    const previousBalanceTotal = parseFloat(balanceTotalText);

    return previousBalanceTotal;
}



//---------------------------- update balance part --------------------
function updateBalance(amount, isAdd) {
    //call the id
    const balanceTotal = document.getElementById('balance-total');
    // call the current balance
    const previousBalanceTotal = getCurrentBalance();
    //calculation with condition
    if (isAdd == true) {
        balanceTotal.innerText = previousBalanceTotal + amount
    }
    else {
        balanceTotal.innerText = previousBalanceTotal - amount;
    }
    
}








//---------------------------- Deposit part --------------------

document.getElementById('deposit-button').addEventListener('click',function () {
    //call the input function
    const depositAmount = getInputValue('deposit-input');
    //condition
    if (depositAmount > 0) {
        //call the update total function
        updateTotalField('deposit-total', depositAmount);
        //call the update balance function
        updateBalance(depositAmount,true)
    }
    
})


//---------------------------- withdraw part --------------------
document.getElementById('withdraw-button').addEventListener('click',function () {
    //call input function
    const withdrawAmount = getInputValue('withdraw-input');
    // call current balance funtion
    const currentBalance = getCurrentBalance();

    //amount withdraw condition
    if (withdrawAmount > 0 && withdrawAmount < currentBalance) {
        updateTotalField('withdraw-total', withdrawAmount);
        updateBalance(withdrawAmount,false)
    }
    if (withdrawAmount > currentBalance) {
        console.log('ai tor poket a taka ase koto ??')
    }
})