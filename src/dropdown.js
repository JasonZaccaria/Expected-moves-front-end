import "./dropdown.css";

function DropDown() {
  return (
    <div className="drop-menu" id="drop-menu-id">
      <a href="/" className="dropdown-link-home">
        <div className="drop-items">Home</div>
      </a>
      <a href="/about" className="dropdown-link-about">
        <div className="drop-items">About</div>
      </a>
    </div>
  );
}
export default DropDown;
