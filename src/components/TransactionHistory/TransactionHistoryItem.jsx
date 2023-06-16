import css from './TransactionHistory.module.css';
import PropTypes from "prop-types";

export const TransactionHistoryItem = ({id, type, amount, currency}) => {
    return (
        {id}
    )
};

TransactionHistoryItem.propTypes = {
    id: PropTypes.number,
    type: PropTypes.string,
    amount: PropTypes.number,
    currency: PropTypes.string,
};