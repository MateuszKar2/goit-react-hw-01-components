import css from './TransactionHistory.module.css';
import PropTypes from "prop-types";
import { TransactionHistoryItem } from './TransactionHistoryItem';
import { CurrencyCodes } from 'validator/lib/isISO4217';

export const TransactionHistory = ({}) => {
    return (
    <table classNmae="transaction-history">
    <thead>
      <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>
  
    <tbody>
      <TransactionHistoryItem
      type={type}
      amount={amount}
      currency={currency}
      key={id}
      />
    </tbody>
  </table>
    )
};