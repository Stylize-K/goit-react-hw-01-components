import PropTypes from 'prop-types';

export const FriendListItem = ({ friend }) => {
  return (
    <li class="item">
      <span class="status"></span>
      <img class="avatar" src={friend.avatar} alt={friend.name} width="48" />
      <p class="name">{friend.name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  friend: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
  }),
};
