import reactLogo from "../images/logo192.png";

function Header() {
  return (
    <nav className="header-nav">
      <div className="header-logo-container">
        <img className="header-img" src={reactLogo} alt="React logo" />
        <h1 className="header-title">ReactFacts</h1>
      </div>
      <div>
        <h2 className="header-subtitle">React Course - Project 1</h2>
      </div>
    </nav>
  );
}

export default Header;
