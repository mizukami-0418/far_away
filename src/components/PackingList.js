import React, { useState } from "react";
import Item from "./Item";

export default function PackingList({
  items,
  onDeleteItem,
  onToggleItem,
  onClearList,
}) {
  const [sortBy, setSortBy] = useState("input");

  let sortedItems;

  if (sortBy === "input") sortedItems = items;

  if (sortBy === "quantity")
    // 数量順
    sortedItems = items.slice().sort((a, b) => a.quantity - b.quantity);

  if (sortBy === "packed")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed)); // 完了順

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            item={item}
            onDeleteItem={onDeleteItem}
            onToggleItem={onToggleItem}
            key={item.id}
          />
        ))}
      </ul>

      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">入力順</option>
          <option value="quantity">数量順</option>
          <option value="packed">完了順</option>
        </select>
        <button onClick={() => setSortBy("input")}>入力順</button>
        <button onClick={() => setSortBy("quantity")}>数量順</button>
        <button onClick={() => setSortBy("packed")}>完了順</button>
        <button onClick={onClearList}>リスト削除</button>
      </div>
    </div>
  );
}
