import css from './TransactionHistory.module.css';
import PropTypes from "prop-types";
import { TransactionHistoryItem } from './TransactionHistoryItem';

export const TransactionHistory = ({items}) => {
    return (
    <table className={css.transactionHistory}>
    <thead className={css.transaction}>
      <tr className={css.trTitle}>
        <th className={css.type}>Type</th>
        <th className={css.amount}>Amount</th>
        <th className={css.currency}>Currency</th>
      </tr>
    </thead>
  
    <tbody>
      {items.map(({type, amount, currency, id}) => (
      <TransactionHistoryItem
      type={type}
      amount={amount}
      currency={currency}
      key={id}
      />
    ))}
    </tbody>
  </table>
    )
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
      currency: PropTypes.string.isRequired,
    }).isRequired
  ),
};