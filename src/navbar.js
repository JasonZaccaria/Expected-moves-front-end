import "./navbar.css";

function Navbar() {
  let count = 0;
  function dropDown() {
    let me = document.getElementById("hamburger-id");
    let action = document.getElementById("drop-menu-id");
    let resize = document.getElementById("form-container-id");
    let resizePlus = document.getElementById("root");
    count++;
    if (count === 1) {
      me.src = require(`./assets/hamburger_after.png`);
      action.style.display = "flex";
      action.style.height = "100%";
      action.style.width = "100%";
      resizePlus.style.gridTemplateRows = "50px 150px 300px 300px 300px";
    } else if (count > 1) {
      count = 0;
      me.src = require("./assets/hamburger_before.png");
      action.style.display = "none";
      action.style.height = "0%";
      action.style.width = "0%";
      resizePlus.style.gridTemplateRows = "50px 0px 300px 300px 300px";
    }
  }
  return (
    <div className="nav-bar">
      <div className="menu-button">
        <img
          className="hamburger-button"
          id="hamburger-id"
          src={require("./assets/hamburger_before.png")}
          onClick={dropDown}
        ></img>
      </div>
      <div className="nav-title">Options Analysis Tool</div>
      <div className="empty-space"></div>
    </div>
  );
}
export default Navbar;
