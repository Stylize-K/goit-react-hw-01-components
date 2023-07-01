import PropTypes from 'prop-types';
import { FriendListItem } from "./FriendListItem";

export const FriendList = ({friends}) => {
    return (
        <ul class="friend-list">
            {friends.map(item => (<FriendListItem friend={item} />) )}
        </ul>
    )
}

FriendList.propTypes = {
    friends: PropTypes.array.isRequired,
}; 