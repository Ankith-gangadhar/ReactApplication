export default function TabButton({children, onSelect, isSelected }) {
  console.log('TAB BUTTON RENDERED');
    return (
  <li>
    <button className={isSelected ? "active" : ""} onClick={onSelect}>{children}</button>
    </li>);
}
