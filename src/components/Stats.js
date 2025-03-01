import React from "react";

export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>さあ、旅行の準備をしよう！持ち物を追加してね✈️</em>
      </p>
    );
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "🎉 すべての持ち物の準備が完了しました！😄"
          : `🎒 持ち物リストは${numItems}個で、準備完了した持ち物は${numPacked}個 (${percentage}%)です。`}
      </em>
    </footer>
  );
}
