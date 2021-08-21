const balance_label = document.getElementById("balance_label");
// const deposits = [];
// const withdrawals = [];
let total_balance = 0;
const deposit = document.getElementById("deposit");
const btnDeposit = document.getElementById("btnDeposit");
const withdraw = document.getElementById("withdraw");
const btnWithdraw = document.getElementById("btnWithdraw");

class Account {
    constructor(balance) {
        this.balance = balance
    }

    deposit(cash) {
        this.balance += cash
    }
    
    withdraw(cash) {
        this.balance -= cash
    }

}

let myAccount = new Account(0)



const formatter = new Intl.NumberFormat('ko-KR', {
    style: 'currency',
    currency: 'KRW'
});


btnDeposit.addEventListener('click', () => {

        myAccount.deposit(Number(deposit.value))

        let total_balanceFormatted = formatter.format(myAccount.balance);
        document.getElementById("balance_label").innerHTML = total_balanceFormatted;

    return deposit.value = '';
    }
);


btnWithdraw.addEventListener('click', () => {

        myAccount.withdraw(Number(withdraw.value))

        let total_balanceFormatted = formatter.format(myAccount.balance);
        document.getElementById("balance_label").innerHTML = total_balanceFormatted;

    return withdraw.value = '';
    }
);


let total_balanceFormatted = formatter.format(total_balance);
        document.getElementById("balance_label").innerHTML = total_balanceFormatted;