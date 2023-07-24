import { Link, useLocation } from 'react-router-dom';
import '../App.css';

function Breadcrumbs() {
  const location = useLocation();

  return (
    <nav>
      <Link to="/"
        className={location.pathname === "/" ? "breadcrumb-active" : "breadcrumb-not-active"}
      >
        Home
      </Link>
      <span className="breadcrumb-arrow">&gt;</span>
      <Link to="/Destination"
        className={location.pathname.startsWith("/destination") ? "breadcrumb-active" : "breadcrumb-not-active"}
      >
        Destination
      </Link>
      <span className="breadcrumb-arrow">&gt;</span>
      <Link to="/About"
        className={location.pathname === "/about" ? "breadcrumb-active" : "breadcrumb-not-active"}
      >
        About
      </Link>
    </nav>
  );
}

export default Breadcrumbs;
