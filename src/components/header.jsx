import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <nav className=" flex gap-5 justify-center py-7">
        <Link
          to="/"
          className="w-100 text-center bg-blue-400 text-black py-2 px-2 rounded-md border-2 border-blue-500 "
        >
          Home
        </Link>
        <Link
          to="/about"
          className="w-100 text-center bg-blue-400 text-black py-2 px-2 rounded-md border-2 border-blue-500 "
        >
          About
        </Link>
        <Link
          to="/products"
          className="w-100 text-center bg-blue-400 text-black py-2 px-2 rounded-md border-2 border-blue-500 "
        >
          Products
        </Link>
      </nav>
    </header>
  );
}
export default Header;
