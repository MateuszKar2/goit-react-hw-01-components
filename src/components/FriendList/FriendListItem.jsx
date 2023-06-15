import css from './FriendList.module.css';
import PropTypes from "prop-types";

export const FriendListItem = ({avatar, name, isOnline}) => {
    return ( 
    <li className={css.item}>
    <span className={`${css.status} ${isOnline ? css.online : css.notOnline}`} />
    <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
    <p className={css.name}>{name}</p>
    </li>
    )
};

FriendList.propTypes = {
        avatar: PropTypes.string,
        name: PropTypes.string,
        isOnline: PropTypes.bool,
        id: PropTypes.number,
};