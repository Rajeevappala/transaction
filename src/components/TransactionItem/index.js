// Write your code here
import './index.css'

const TransactionItem = props => {
  const {transactionDetails, deleteEle} = props
  const {id, title, amount, type} = transactionDetails
  const onDeleteTransactionEle = () => {
    deleteEle(id)
  }
  return (
    <div className="transaction-details">
      <p>{title}</p>
      <p>{amount}</p>
      <p>{type}</p>
      <button type="button" className="button" onClick={onDeleteTransactionEle}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png "
          alt="button"
          className="button-ele"
        />
      </button>
    </div>
  )
}

export default TransactionItem
