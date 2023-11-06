import { useState } from "react";
import { FormSplitBill } from "./components/FormSplitBill";
import { FormAddFriend } from "./components/FormAddFriend";
import { Button } from "./components/Button";
import { FriendsList } from "./components/FriendsList";
import { initialFriends } from "./constants/app.general";

function App() {
  const [enableAddNewFriend, setEnableAddNewFriend] = useState(false);
  const [friends, setFriends] = useState(initialFriends);
  const [selectedFriend, setSelectedFriend] = useState(null);

  const toggleAddNewFriend = () => {
    setEnableAddNewFriend((prev) => !prev);
  };

  const handleAddNewFriend = (friend) => {
    setFriends((prev) => [...prev, friend]);
    setEnableAddNewFriend(false);
  };

  const handleChangeSelectedFriendId = (friend) => {
    setSelectedFriend((prev) => (prev?.id === friend?.id ? null : friend));
  };

  const handleOnBillUpdate = (id, amount) => {
    setFriends((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, balance: item.balance + amount } : item
      )
    );
  };

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList
          friends={friends}
          selectedFriend={selectedFriend}
          onChange={handleChangeSelectedFriendId}
        />
        {enableAddNewFriend && <FormAddFriend onAdd={handleAddNewFriend} />}
        <Button onClick={toggleAddNewFriend}>
          {enableAddNewFriend ? "Close" : "Add Friend"}
        </Button>
      </div>
      <FormSplitBill
        selectedFriend={selectedFriend}
        handleOnBillUpdate={handleOnBillUpdate}
        handleChangeSelectedFriendId={handleChangeSelectedFriendId}
      />
    </div>
  );
}

export default App;
