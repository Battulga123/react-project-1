export default function Panel({ children, title, onShow, isActive }) {
  let render = <button onClick={onShow}>Show</button>;

  if (isActive) {
    render = <p>{children}</p>;
  }

  return (
    <div>
      <h3>{title}</h3>
      {isActive ? <p>{children}</p> : <button onShow={onShow}>Show</button>}
    </div>
  );
}
