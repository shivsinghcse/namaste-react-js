import { logo_URL } from "../utils/constants";
export const Header = () => {
  return (
    <>
      <header>
        <div className="logo">
          <img
            src= {logo_URL}
            alt="logo"
          />
        </div>
        <nav className="navbar">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact us</li>
            <li>Sign in</li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
