import { logo_URL } from "../utils/constants";
import { useState } from "react";
export const Header = () => {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <>
      <header>
        <div className="logo">
          <img src={logo_URL} alt="logo" />
        </div>
        <nav className="navbar">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact us</li>
            <li>Cart</li>
          </ul>
          <button className="login-btn" onClick={() => {setIsLogin(!isLogin)}}>
            {isLogin ? "Log out" : "Log in"}
          </button>
        </nav>
      </header>
    </>
  );
};

export default Header;
