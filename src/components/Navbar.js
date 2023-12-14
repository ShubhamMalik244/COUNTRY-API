export default function Navbar({ colorThemObj, handelColorThemChange }) {
  return (
    <nav className={"navbar " + colorThemObj.colorModeV2}>
      <div className="navbox">
        <h1>Where in the world?</h1>

        <h2>
          <img
            onClick={handelColorThemChange}
            className="LDicon"
            src={colorThemObj.navIcon}
            alt="navIcon"
          />
          <span className="LDtext">{colorThemObj.navText}</span>
        </h2>
      </div>
    </nav>
  );
}
