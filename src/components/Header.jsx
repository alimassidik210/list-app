import React, { useState } from "react";

export default function Header({ onChangeTitle, titleFormChild }) {
  const [buttonClick, setButtonClick] = useState(false);

  function handleChange(e) {
    onChangeTitle(e.target.value);
  }

  return (
    <div className="bg-yellow-950 py-5 gap-2 flex  justify-center items-center">
      <h1 className="sm:text-6xl capitalize text-3xl text-center text-white ">
        Catatan {titleFormChild} 📄
      </h1>
      {buttonClick && (
        <select
          value={titleFormChild}
          onChange={handleChange}
          className="w-24 text-center  h-8 rounded-md "
        >
          <option value="belanja">Belanja</option>
          <option value="ibadah">Ibadah</option>
          <option value="olahraga">Olahraga</option>
          <option value="makan">Makan</option>
          <option value="tugas">Tugas</option>
          <option value="mengaji">Ngaji</option>
        </select>
      )}

      <button
        onClick={(e) => setButtonClick(!buttonClick)}
        className="text-sm  text-white "
      >
        {buttonClick ? "❌" : "🆗 klik"}
      </button>
    </div>
  );
}
