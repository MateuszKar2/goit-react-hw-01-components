import css from './FriendList.module.css';
import PropTypes from "prop-types";
import { FriendListItem } from './FriendListItem';

export const FriendList = ({ friends }) => {
    return (
   <ul className={css.friendList}>
    {friends.map(({ avatar, name, isOnline, id }) => (
        <FriendListItem
        avatar={avatar}
        name={name}
        isOnline={isOnline}
        key={id}
        />        
    ))}
    </ul>
    )
};


FriendList.prototype = {
    friends: PropTypes.arrayOf(PropTypes.shape({
        avatar: PropTypes.string,
        name: PropTypes.string,
        isOnline: PropTypes.bool,
        id: PropTypes.number,
    })),
};