import { useState } from "react";
import { Button } from "./Button";

export function FormSplitBill({
  selectedFriend,
  handleOnBillUpdate,
  handleChangeSelectedFriendId,
}) {
  const [billValue, setBillValue] = useState("");
  const [yourExpense, setYourExpense] = useState("");
  const [billPayer, setBillPayer] = useState("user");

  const friendsExpense = billValue - yourExpense;

  const handleOnBillValueChange = (e) => {
    setBillValue(e.target.value);
  };

  const handleOnYourExpenseChange = (e) => {
    setYourExpense(e.target.value);
  };

  const handleOnBillPayer = (e) => {
    setBillPayer(e.target.value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (!billPayer || !yourExpense) return;
    handleOnBillUpdate(
      selectedFriend.id,
      billPayer === "user" ? friendsExpense : -yourExpense
    );
    setBillValue("");
    setYourExpense("");
    setBillPayer("user");
    handleChangeSelectedFriendId(null);
  };

  return (
    selectedFriend && (
      <form className="form-split-bill" onSubmit={handleOnSubmit}>
        <h2>Split a bill with {selectedFriend.name}</h2>

        <label>🎉 Bill Value</label>
        <input
          type="text"
          value={billValue}
          onChange={handleOnBillValueChange}
        />

        <label>🎉 Your expense</label>
        <input
          type="text"
          value={yourExpense}
          onChange={handleOnYourExpenseChange}
        />

        <label>🎉 {selectedFriend.name}'s expense</label>
        <input type="text" disabled value={yourExpense && friendsExpense} />

        <label>🎉 Who is paying the Bill</label>
        <select value={billPayer} onChange={handleOnBillPayer}>
          <option value="user">You</option>
          <option value="friend">{selectedFriend.name}</option>
        </select>

        <Button>Split Bill</Button>
      </form>
    )
  );
}
