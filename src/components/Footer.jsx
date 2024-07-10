import React from "react";

function CopyRight() {
  return (
    <div className="text-sm mt-2">
      &copy; 2024 Alim Assidik. All rights reserved.
    </div>
  );
}

export default function Footer({ items, titleFormChild }) {
  const totalItems = items.length;
  const totalCheckedItems = items.filter((item) => item.checked).length;
  const percentage = Math.round((totalCheckedItems / totalItems) * 100);

  {
    return totalItems === 0 ? (
      <footer className="text-center text-xl bg-yellow-300 p-3 capitalize">
        daftar list {titleFormChild} anda kosong yuk buat jangan mager 😋
        <CopyRight />
      </footer>
    ) : percentage == 100 ? (
      <footer className="text-center text-xl bg-yellow-300 p-3 capitalize">
        Selamat semua tugas {titleFormChild} mu telah selesai 😎
        <CopyRight />
      </footer>
    ) : (
      <footer className="text-center text-xl bg-yellow-300 p-3 capitalize">
        💡 ada {totalItems} list {titleFormChild}, {totalCheckedItems} sudah
        diselesaikan ({percentage}%)
        <CopyRight />
      </footer>
    );
  }
}
