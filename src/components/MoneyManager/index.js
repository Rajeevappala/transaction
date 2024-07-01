import {Component} from 'react'
import './index.css'
import {v4} from 'uuid'
import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

class MoneyManager extends Component {
  state = {
    transactionList: [],
    inputText: '',
    amountEle: '',
    optionId: transactionTypeOptions[0].displayText,
  }

  inputTextEle = event => {
    this.setState({inputText: event.target.value})
  }

  inputAmountEle = event => {
    this.setState({amountEle: event.target.value})
  }

  transactionDisplayText = event => {
    this.setState({optionId: event.target.value})
  }

  addTransaction = event => {
    event.preventDefault()
    const {inputText, amountEle, optionId} = this.state

    const typeOption = transactionTypeOptions.find(
      eachTransaction => eachTransaction.displayText === optionId,
    )

    const {displayText} = typeOption

    const newTransaction = {
      id: v4(),
      title: inputText,
      amount: parseInt(amountEle),
      type: displayText,
    }

    this.setState(prevState => ({
      transactionList: [...prevState.transactionList, newTransaction],
      inputText: '',
      amountEle: '',
    }))
  }

  incomeAmount = () => {
    const {transactionList} = this.state
    let incomeAmount = 0

    transactionList.forEach(eachIncome => {
      if (eachIncome.type === transactionTypeOptions[0].displayText) {
        incomeAmount += eachIncome.amount
      }
    })
    return incomeAmount
  }

  expenseAmount = () => {
    const {transactionList} = this.state
    let expensesAmount = 0

    transactionList.forEach(eachExpense => {
      if (eachExpense.type === transactionTypeOptions[1].displayText) {
        expensesAmount += eachExpense.amount
      }
    })
    return expensesAmount
  }

  getBalanceAmount = () => {
    const {transactionList} = this.state
    let balanceAmount = 0
    let incomeAmount = 0
    let expensesAmount = 0

    transactionList.forEach(eachTransaction => {
      if (eachTransaction.type === transactionTypeOptions[0].displayText) {
        incomeAmount += eachTransaction.amount
      } else {
        expensesAmount += eachTransaction.amount
      }
    })

    balanceAmount = incomeAmount - expensesAmount

    return balanceAmount
  }

  render() {
    const {inputText, amountEle, optionId, transactionList} = this.state

    console.log(transactionList.length)

    const balanceAmountEle = this.getBalanceAmount()
    const incomeAmount = this.incomeAmount()
    const expenseAmount = this.expenseAmount()
    return (
      <div className="bg-container">
        <div className="card-1">
          <h1 className="heading">Hi,Richard</h1>
          <p className="para-ele">
            Welcome back to your <span className="span-ele">Money manager</span>
          </p>
        </div>
        <MoneyDetails
          incomeAmount={incomeAmount}
          expenseAmount={expenseAmount}
          balanceAmount={balanceAmountEle}
        />
        <div className="two-cards">
          <div className="card-element">
            <form className="forms-list" onSubmit={this.addTransaction}>
              <h1 className="head">Add Transactions</h1>
              <label htmlFor="title">TITLE</label>
              <input
                type="text"
                placeholder="TITLE"
                id="title"
                className="input-ele"
                onChange={this.inputTextEle}
              />
              <label htmlFor="Amount">AMOUNT</label>
              <input
                type="text"
                placeholder="Amount"
                id="Amount"
                className="input-ele"
                onChange={this.inputAmountEle}
              />
              <label htmlFor="select">Type</label>
              <select
                id="select"
                className="input-ele"
                value={optionId}
                onChange={this.transactionDisplayText}
              >
                {transactionTypeOptions.map(eachEle => (
                  <option key={eachEle.optionId} value={eachEle.displayText}>
                    {eachEle.displayText}
                  </option>
                ))}
              </select>
              <button type="submit" className="button-ele">
                Add
              </button>
            </form>
          </div>
          <div className="history-card">
            <h1 className="history-head">History</h1>
            <hr />
            <ul className="ul-list">
              <li className="list-element">
                <p>Title</p>
                <p>Amount</p>
                <p>Type</p>
                <p>.</p>
              </li>
              {transactionList.map(eachtransactionElement => (
                <TransactionItem
                  key={eachtransactionElement.id}
                  transactionDetails={eachtransactionElement}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
