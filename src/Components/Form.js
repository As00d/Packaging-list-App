import { useState } from "react";

export const Form = ({ setItems }) => {
  const [input, setInput] = useState("");
  const [select, setSelect] = useState(1);

  function handleSubmit(e) {
    if (!input) return;
    e.preventDefault();
    const item = {
      input,
      select,
      packed: false,
      id: Date.now(),
    };
    handleAddItem(item);

    // making it default value
    setInput("");
    setSelect(1);
  }

  function handleAddItem(itemVal) {
    setItems((items) => [...items, itemVal]);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>Add your items in the list ?</h3>
      <select
        name=""
        id=""
        value={select}
        onChange={(e) => setSelect(+e.target.value)}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        name=""
        id=""
        placeholder="Add items... "
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
};
