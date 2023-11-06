import { Friend } from "./Friend";

export function FriendsList({ friends, selectedFriend, onChange }) {
  return (
    <ul>
      {friends.map((friend) => (
        <Friend
          friend={friend}
          key={friend.id}
          selectedFriend={selectedFriend}
          onChange={onChange}
        />
      ))}
    </ul>
  );
}
