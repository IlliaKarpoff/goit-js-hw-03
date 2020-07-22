// Задание 7 - дополнительное, выполнять не обязательно
// Напиши скрипт управления личным кабинетом интернет банка. 
// Есть объект account в котором необходимо реализовать методы для работы с балансом и историей транзакций.

/* * Типов транзацкий всего два. * Можно положить либо снять деньги со счета. */
// const Transaction = {
//   DEPOSIT: 'deposit',
//   WITHDRAW: 'withdraw',
// };

/* * Каждая транзакция это объект со свойствами: id, type и amount */

const account = {
  // Текущий баланс счета
  balance: 0,
  id: 0,

  // История транзакций
  transactions: [],

  /*   * Метод создает и возвращает объект транзакции.
   * Принимает сумму и тип транзакции.   */
  createTransaction(amount, type) {
    this.transactions.push({
      transactionId: account.id += 1,
      transactionAmount: amount,
      transactionType: type,
    });
    return this.transactions;
  },
  
  /*  * Метод отвечающий за добавление суммы к балансу.
  * Принимает сумму танзакции.
  * Вызывает createTransaction для создания объекта транзакции
  * после чего добавляет его в историю транзакций  
  */
  deposit(amount) {
    this.balance += amount; 
    this.createTransaction(amount, 'deposit')
    return (console.log(`You deposit $${amount}. Current balance: $${this.balance}.`))
  },
  
  /*   * Метод отвечающий за снятие суммы с баланса.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций.
   *
   * Если amount больше чем текущий баланс, выводи сообщение
   * о том, что снятие такой суммы не возможно, недостаточно средств.
   */
  
  withdraw(amount) {
    if (this.balance < amount) {
      console.log('снятие $', amount, 'невозможно, недостаточно средств!')
    } else {
      this.balance -= amount; 
      this.createTransaction(amount, 'withdraw')
      console.log(`You withdraw $${amount}. Current balance: $${this.balance}.`)
    }
  },

  /*   * Метод возвращает текущий баланс
   */
  getBalance() {
    console.log('Current balance: $', this.balance);
  },

  /* Метод ищет и возвращает объект транзации по id
   */
  getTransactionDetails(id) {
      if (id > this.transactions.length || id < 1) {
        console.log(`ще не було транзакції № ${id}, всього транзакцій - ${this.transactions.length}`);
      } else {
        return console.log('Got it!', account.transactions[id-1])
      }
  },

  /*   * Метод возвращает количество средств
   * определенного типа транзакции из всей истории транзакций
   */
  getTransactionTotal(type) {
    let total = 0;        
    for (const transaction of this.transactions) {
      if (transaction.transactionType === type) {
        total += transaction.transactionAmount;
      }
    }
    return console.log('Total', type, '-', total);
  },
  
};

account.deposit(1000)
account.withdraw(100)
account.withdraw(500)
account.getTransactionDetails(2)
account.withdraw(1000)
account.getBalance()
account.deposit(1000)
account.withdraw(100)
account.withdraw(500)
account.getTransactionDetails(7)
account.getTransactionTotal('withdraw')
account.getTransactionTotal('deposit')
account.getBalance()
