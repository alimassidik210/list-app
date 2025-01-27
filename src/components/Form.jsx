import React, { useState } from "react";

export default function Form({ onAddItem, titleFormChild }) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!name) return;

    let newItem = {
      id: Date.now(),
      name,
      quantity,
      checked: false,
    };

    onAddItem(newItem);
    setName("");
    setQuantity("");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex p-4 flex-col sm:flex-row  justify-center items-center gap-2 bg-green-400"
    >
      <h3 className="text-xl text-center">
        Hari ini {titleFormChild} apa kita 🤔 ?
      </h3>
      {/* <div className="flex gap-2 px-3 justify-center"> */}
      <input
        type="text"
        className="p-2 text-center bg-gray-200 rounded-md w-full md:w-1/3 "
        placeholder="jumlah/jenis/waktu (optional)"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
      />
      <input
        type="text"
        className="p-2 text-center bg-gray-200 w-full md:w-1/3 rounded-md"
        placeholder="masukan nama list"
        value={name}
        min={2}
        max={20}
        required
        onChange={(e) => setName(e.target.value)}
      />
      <button className="bg-blue-500 text-xs w-full md:w-auto uppercase p-2 rounded-md text-white hover:opacity-85 ">
        Add
      </button>
      {/* </div> */}
    </form>
  );
}
