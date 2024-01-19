export default function Toolbar({filters, selected, onSelectFilter}) {
  return (
    <>
      {filters.map((el, ind) => {
        if (el === selected) {
          return <li onClick={onSelectFilter} key={ind} className="toolBar-item toolBar-item-active">{el}</li>
        } else {
          return <li onClick={onSelectFilter} key={ind} className="toolBar-item">{el}</li>
        }
      })}
    </>
  );
}
