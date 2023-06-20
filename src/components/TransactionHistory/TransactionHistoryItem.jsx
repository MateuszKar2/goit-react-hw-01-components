import css from './TransactionHistory.module.css';
import PropTypes from "prop-types";

export const TransactionHistoryItem = ({type, amount, currency}) => {
    return (
        <tr className={css.transaction}>
        <td className={css.type}>{type}</td>
        <td className={css.amount}>{amount}</td>
        <td className={css.currency}>{currency}</td>
      </tr>
    )
};

TransactionHistoryItem.propTypes = {
    id: PropTypes.string,
    type: PropTypes.string,
    amount: PropTypes.string,
    currency: PropTypes.string,
};