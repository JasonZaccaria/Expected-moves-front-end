import "./navbar.css";

function NavbarTwo() {
  let bool = false;

  function dropDown() {
    //here we are displaying our dropdown and transitioning hamburger button
    const lineOne = document.getElementById("lineOne");
    const lineTwo = document.getElementById("lineTwo");
    const lineThree = document.getElementById("lineThree");
    let action = document.getElementById("drop-menu-id");
    let resize = document.getElementById("form-container-id");
    let resizePlus = document.getElementById("root");
    if (bool) {
      bool = false;
      lineOne.style.transform = "rotate(0deg) translate(0px, 0px)";
      lineOne.style.transition = "all .3s ease-in-out";
      lineTwo.style.opacity = "100%";
      lineTwo.style.transition = "all .3s ease-in-out";
      lineThree.style.transform = "rotate(0deg) translate(0px, 0px)";
      lineThree.style.transition = " all .3s ease-in-out";
      action.style.display = "none";
      action.style.height = "0%";
      action.style.width = "0%";
      resizePlus.style.gridTemplateRows = "50px 0px 325px 300px 345px";
      action.style.transition = "all 5s ease-in-out";
    } else {
      bool = true;
      lineOne.style.transform = "rotate(45deg) translate(6px, 6px)";
      lineOne.style.transition = "all .3s ease-in-out";
      lineTwo.style.opacity = "0%";
      lineTwo.style.transition = "all .3s ease-in-out";
      lineThree.style.transform = "rotate(-45deg) translate(6px, -6px)";
      lineThree.style.transition = "all .3s ease-in-out";
      action.style.display = "flex";
      action.style.height = "100%";
      action.style.width = "100%";
      resizePlus.style.gridTemplateRows = "50px 150px 325px 300px 345px";
      //action.style.transition = "all 5s ease-in-out";
    }
  }
  return (
    <div className="nav-bar">
      <div
        className="menu-button-container"
        id="hamburger-id"
        onClick={dropDown}
      >
        <div className="burger-one" id="lineOne"></div>
        <div className="burger-two" id="lineTwo"></div>
        <div className="burger-three" id="lineThree"></div>
      </div>
      <h1 className="nav-title">Options Analysis Tool</h1>
      <div className="empty-space"></div>
    </div>
  );
}
export default NavbarTwo;
