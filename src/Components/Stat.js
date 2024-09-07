export const Stat = ({ items }) => {
  return (
    <footer className="stats">
      <em>
        You have {items.length} items in your list and you already packed:
        {items.filter((item) => item.packed).length}
      </em>
    </footer>
  );
};
