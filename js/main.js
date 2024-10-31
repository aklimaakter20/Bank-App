// create login page variable and validation
const loginBtn = document.getElementById('login-btn')
const mainPage = document.getElementById('main-page')
mainPage.style.display= 'none'

loginBtn.addEventListener('click', function(){
    const logInBox = document.getElementById ('login-box');
    const accountNo = document.getElementById ('acc-number').value;
    const password = document.getElementById ('password').value;

    if(accountNo == ''){
        alert(" email address is required");
    }else if(password == ''){
        alert("Your password is required")
    }else{
        logInBox.style.display = 'none';
        mainPage.style.display = 'block'
    }
})

//   add deposit start

const addDepositBtn = document.getElementById('add_depositBtn')
addDepositBtn.addEventListener('click', function () {

    const date = new Date()
    let day = date.getDate()
    let month = date.getMonth() + 1
    let year = date.getFullYear()
    let hour = date.getHours()
    let mints = date.getMinutes()


    let mainDate = `${day}-${month}-${year} ${hour}: ${mints}`

    const depositInput = document.getElementById('deposit_input').value;

    const depositNewInput = parseFloat(depositInput);

    const totalDeposit = document.getElementById('total_deposit').innerHTML;

    const totalNewDeposit = parseFloat(totalDeposit);

    const total_Deposit_info = depositNewInput + totalNewDeposit;

    document.getElementById('total_deposit').innerHTML = total_Deposit_info.toFixed(2);
    

    // add deposit end

    // Total balance
    const total_balance = document.getElementById("total_balance").innerHTML;
    const NewTotal_balance = parseFloat(total_balance);

    const Total_New_Balance = depositNewInput + NewTotal_balance;
    document.getElementById("total_balance").innerHTML = Total_New_Balance.toFixed(2);


    addTransaction(mainDate, "Deposit", depositNewInput, Total_New_Balance)

});

// withdraw section here

const withdrawBtn = document.getElementById("withdrawBtn");
withdrawBtn.addEventListener('click', function () {

    const date = new Date()
    let day = date.getDate()
    let month = date.getMonth() + 1
    let year = date.getFullYear()
    let hour = date.getHours()
    let mints = date.getMinutes()


    let mainDate = `${day}-${month}-${year} ${hour}: ${mints}`

    const withdrawInput = document.getElementById("withdraw_input").value;

    const newWithdrawInput = parseFloat(withdrawInput);


    const withdrawTotal = document.getElementById("withdraw_total").innerHTML;

    newWithdrawTotal = parseFloat(withdrawTotal);

    const totalWithdraw = newWithdrawTotal + newWithdrawInput;
    document.getElementById("withdraw_total").innerHTML = totalWithdraw.toFixed(2);

    // multiplication
    const TotalBalance = document.getElementById("total_balance").innerHTML;
    const NewBalance = parseFloat(TotalBalance);

    const multiplication = NewBalance - newWithdrawInput;

    document.getElementById("total_balance").innerHTML = multiplication.toFixed(2);

    addTransaction(mainDate ,"Withdraw", newWithdrawInput, multiplication)
});

// transaction history

const transactionHistoryBtn = document.getElementById("transactionHistoryBtn")
const transactionHistory = document.getElementById("transactionHistory")
transactionHistory.style.display = 'none';

transactionHistoryBtn.addEventListener('click', function () {
    transactionHistory.style.display = 'block';
})
const transactionTableBody = document.getElementById("transactionTableBody")
const addTransaction = (date, type, amount, balance) => {

    const row = document.createElement('tr');
    row.innerHTML += `
                        <td class="py-2 px-8">${date}</td>
                        <td class="py-2 px-8">${type}</td>
                        <td class="py-2 px-8">$${amount}</td>
                        <td class="py-2 px-8">$${balance}</td>
                      `;
    transactionTableBody.appendChild(row);
};

transactionHistoryBtn.addEventListener('click', function () {
    transactionHistory.style.display = 'block';
});
