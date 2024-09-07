export const Item = ({
  item: { input, select, packed, id },
  onDeleteItem,
  onUpdateItem,
}) => {
  return (
    <>
      <li>
        <input
          type="checkbox"
          name=""
          id=""
          value={packed}
          onChange={() => onUpdateItem(id)}
        />
        <span style={packed ? { textDecoration: `line-through` } : {}}>
          {select} {input}
        </span>
        <button onClick={() => onDeleteItem(id)}>❌</button>
      </li>
    </>
  );
};
