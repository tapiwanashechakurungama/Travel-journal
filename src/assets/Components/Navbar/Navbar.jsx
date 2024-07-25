import "./Navbar.css"
import { FaEarthAmericas } from "react-icons/fa6";

const Navbar = () => {
  return (
    <nav className="navbar" style={{ padding: "20px", background: "#F55A5A", color: "white" }}>
      <div className="container text-centre">
        <h2 className="text-center">
          <FaEarthAmericas />
          my travel journal.
        </h2>
      </div>
    </nav>
  );
}

export default Navbar