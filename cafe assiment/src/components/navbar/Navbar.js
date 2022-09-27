import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar(props) {
  return (
    <div className="nav">
      <Link to={"/login"}>
        <button>Login</button>
      </Link>
      <Link to={"/cafe"}>
        <button>cafe</button>
      </Link>
    </div>
  );
}
