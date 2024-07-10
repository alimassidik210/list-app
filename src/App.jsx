import React, { useState } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import List from "./components/List";
import Footer from "./components/Footer";

import { data } from "./data";

export default function App() {
  const [items, setItems] = useState(data);
  const [titleFormChild, setTitleFormChild] = useState("mengaji");

  function handleAddItem(item) {
    setItems([...items, item]);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleTogleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  }

  function handleClearData() {
    const confirm = window.confirm("kamu yakin mau ngapus semua ? 🤨");
    if (confirm) {
      setItems([]);
    }
  }

  function handleChangeTitle(title) {
    setTitleFormChild(title);
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header
        titleFormChild={titleFormChild}
        onChangeTitle={handleChangeTitle}
      />
      <Form onAddItem={handleAddItem} titleFormChild={titleFormChild} />
      <List
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleTogleItem}
        onClearData={handleClearData}
      />
      <Footer items={items} titleFormChild={titleFormChild} />
    </div>
  );
}
