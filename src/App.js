import { Logo } from "./Components/Logo";
import { Form } from "./Components/Form";
import { Packagaging } from "./Components/Packagaging";
import { Stat } from "./Components/Stat";
import { useState } from "react";

function App() {
  const [items, setItems] = useState([]);
  function handleDelete(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }
  function handleToggle(id) {
    setItems(
      items.map((item) => {
        return item.id === id ? { ...item, packed: !item.packed } : { ...item };
      })
    );
  }
  return (
    <div className="app">
      <Logo />
      <Form setItems={setItems} />
      <Packagaging
        items={items}
        onDeleteItem={handleDelete}
        onUpdateItem={handleToggle}
        setItems={setItems}
      />
      <Stat items={items} />
    </div>
  );
}

export default App;
