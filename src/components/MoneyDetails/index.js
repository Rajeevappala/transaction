// Write your code here
// Write your code here

import './index.css'

const MoneyDetails = props => {
  const {incomeAmount, expenseAmount, balanceAmount} = props

  return (
    <div className="card-ele">
      <div className="card-container3 card">
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png "
            alt="balance"
            className="image"
          />
        </div>
        <div>
          <p className="income-head">Your Balance</p>
          <p className="income-head">
            RS <span>{balanceAmount}</span>
          </p>
        </div>
      </div>
      <div className="card-container card">
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png "
            alt="income"
            className="image"
          />
        </div>
        <div>
          <p className="income-head">YOUR INCOME</p>
          <p className="income-head">
            RS <span>{incomeAmount}</span>
          </p>
        </div>
      </div>
      <div className="card-container2 card">
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png "
            alt="expenses"
            className="image"
          />
        </div>
        <div>
          <p className="income-head">YOUR Expenses</p>
          <p className="income-head">
            RS <span>{expenseAmount}</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default MoneyDetails
