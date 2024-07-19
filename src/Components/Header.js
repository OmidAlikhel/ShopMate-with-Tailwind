import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/logo.png";

export const Header = () => {
  return (
    <header className="max-w-7xl m-auto h-12  border-b border-slate-200 mt-4">
      <nav className="flex justify-between ">
        <Link className="flex flex-row hover:cursor-pointer gap-2">
          <img className="w-7 h-7" src={Logo} alt="logoimage" />
          <span className="text-lg">Shopping Cart</span>
        </Link>
        <nav>
          <NavLink to="/" className="hover:cursor-pointer  mr-4 ">
            Home
          </NavLink>
          <NavLink to="/cart" className="hover:cursor-pointer ">
            Cart
          </NavLink>
        </nav>
        <Link className="hover:cursor-pointer">Cart:2</Link>
      </nav>
    </header>
  );
};
