const Transaction = {
  DEPOSIT: "deposit",
  WITHDRAW: "withdraw",
};

const account = {
  balance: 0,
  transactions: [],
  counterId: 0,

  /*
   * Метод створює і повертає об'єкт транзакції.
   * Приймає суму і тип транзакції.
   */

  createTransaction(amount, type) {
    const transaction = {};
    transaction.amount = amount;
    transaction.type = type;
    return transaction;
  },

  /*
   * Метод відповідає за додавання суми до балансу.
   * Приймає суму танзакції.
   * Викликає createTransaction для створення об'єкта транзакції
   * після чого додає його в історію транзакцій
   */

  deposit(amount) {
    const transaction = this.createTransaction(amount, Transaction.DEPOSIT);
    this.balance += amount;
    transaction.id = this.counterId + 1;
    this.counterId += 1;
    this.transactions.push(transaction);
  },

  /*
   * Метод відповідає за зняття суми з балансу.
   * Приймає суму танзакції.
   * Викликає createTransaction для створення об'єкта транзакції
   * після чого додає його в історію транзакцій.
   *
   * Якщо amount більше, ніж поточний баланс, виводь повідомлення
   * про те, що зняття такої суми не можливо, недостатньо коштів.
   */

  withdraw(amount) {
    if (this.balance >= amount) {
      const transaction = this.createTransaction(amount, Transaction.WITHDRAW);
      this.balance -= amount;
      transaction.id = this.counterId + 1;
      this.counterId += 1;
      this.transactions.push(transaction);
    }
    console.log("На вашому рахунку недостатньо коштів.");
  },

  /*
   * Метод повертає поточний баланс
   */

  getBalance() {
    console.log(`На вашому рахунку ${this.balance}$`);
  },

  /*
   * Метод шукає і повертає об'єкт транзакції по id
   */

  getTransactionDetails(id) {
    for (const transaction of this.transactions) {
      if (transaction.id === id) {
        console.log(
          `id = ${id}, тип транзакції = ${this.transactions[id].type}, сума = ${this.transactions[id].amount}`
        );
        return;
      }
    }
  },

  /*
   * Метод повертає кількість коштів
   * певного типу транзакції з усієї історії транзакцій
   */

  getTransactionTotal(type) {
    let total = 0;
    for (const transaction of this.transactions) {
      if (transaction.type === type) {
        total += transaction.amount;
        console.log(`Загальна сума всіх історій транзакції: ${total}`);
      }
    }
    return;
  },
};

// Перевірка:
// account.getBalance();
// account.deposit(1000);
// account.getBalance();
// account.getTransactionDetails(0);
// account.deposit(1000);
// account.getTransactionDetails(1);
// account.withdraw(500);
// account.getTransactionDetails(2);
// account.getTransactionTotal("deposit");
// account.getTransactionTotal("withdraw");
