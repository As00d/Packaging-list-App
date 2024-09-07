import { useState } from "react";
import { Item } from "./Item";

export const Packagaging = ({
  items,
  onDeleteItem,
  onUpdateItem,
  setItems,
}) => {
  const [sortBy, setSortBy] = useState("input");
  console.log(items);
  let sortItems;
  if (sortBy === "input") sortItems = items;

  if (sortBy === "description")
    sortItems = items.slice().sort((a, b) => a.input.localeCompare(b.input));

  if (sortBy === "packedStatus")
    sortItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <div className="list">
      <ul>
        {sortItems.map((item) => {
          return (
            <Item
              item={item}
              key={item.id}
              onDeleteItem={onDeleteItem}
              onUpdateItem={onUpdateItem}
            />
          );
        })}
      </ul>
      <div className="actions">
        <select
          name=""
          id=""
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packedStatus">Sort by packed status</option>
        </select>
        <button
          className="btn"
          onClick={() => {
            const confirmed = window.confirm(
              "Are you sure you want to delete all items"
            );
            if (confirmed) setItems([]);
          }}
        >
          Clear Items
        </button>
      </div>
    </div>
  );
};
