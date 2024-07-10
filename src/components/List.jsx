import { useState } from "react";
import { FaTrash } from "react-icons/fa";

export default function List({
  onDeleteItem,
  onToggleItem,
  items,
  onClearData,
}) {
  const [sortedBy, setSortedBy] = useState("input");

  let sortedItems;

  switch (sortedBy) {
    case "name":
      sortedItems = items.slice().sort((a, b) => a.name.localeCompare(b.name));
      break;
    case "checked":
      sortedItems = items.slice().sort((a, b) => a.checked - b.checked);
      break;
    default:
      sortedItems = items;
  }

  return (
    <>
      <div className="flex-grow   bg-gray-200 p-4 overflow-scroll">
        <ul>
          {sortedItems.map((item) => (
            <li
              key={item.id}
              className="capitalize flex justify-center items-center  gap-3 mb-3"
            >
              <input
                type="checkbox"
                checked={item.checked}
                onChange={() => onToggleItem(item.id)}
                className="w-5 h-5"
              />
              <span className={`text-xl ${item.checked ? "line-through" : ""}`}>
                {item.quantity} - {item.name}
              </span>
              <button onClick={() => onDeleteItem(item.id)}>
                <FaTrash className="text-red-600 text-xl" />
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="p-4 flex justify-center gap-4 items-center bg-cyan-300 ">
        <span className="text-3xl">🔠</span>
        <select
          value={sortedBy}
          onChange={(e) => setSortedBy(e.target.value)}
          className="p-2 text-center text-xl rounded-md w-[80%] sm:w-[50%] "
        >
          <option value="input">urutkan berdasarkan input</option>
          <option value="name">urutkan berdasarkan nama</option>
          <option value="checked">urutkan berdasarkan ceklist</option>
        </select>
        <button
          onClick={onClearData}
          className="bg-blue-700 rounded-md uppercase text-xs text-white cursor-pointer hover:opacity-85 p-1 sm:p-3 sm:text-md"
        >
          Bersihkan Daftar
        </button>
      </div>
    </>
  );
}
