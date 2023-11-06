import { useState } from "react";
import { Button } from "./Button";

export function FormAddFriend({ onAdd }) {
  const [name, setName] = useState("");
  const [imgUrl, setImgUrl] = useState("https://i.pravatar.cc/48?u=");

  const handleOnAdd = (e) => {
    e.preventDefault();
    if (!name || !imgUrl) return;
    const id = crypto.randomUUID();
    const newFriend = {
      id,
      name: name,
      image: `https://i.pravatar.cc/48?u=${id}`,
      balance: 0,
    };
    setName("");
    setImgUrl("https://i.pravatar.cc/48?u=");
    onAdd(newFriend);
  };

  return (
    <form className="form-add-friend" onSubmit={handleOnAdd}>
      <label>😀 Friend Name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label>🎉 Image URL</label>
      <input
        type="text"
        value={imgUrl}
        onChange={(e) => setImgUrl(e.target.value)}
      />

      <Button>Add</Button>
    </form>
  );
}
