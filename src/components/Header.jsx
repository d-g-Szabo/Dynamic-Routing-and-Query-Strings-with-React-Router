import "./Header.css";
import { Link } from "react-router-dom";
// importing from public folder
// import logo from "/assets/images/googlelogo_color_272x92dp.png";

export default function Header() {
  return (
    <>
      <header>
        <img
          src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
          alt="Google Logo"
        />
        <h1>Daniel&apos;s Burgers</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/burgers">Burgers</Link>
          <Link to="/idk">Workshop</Link>
          <Link to="/recipes">Recipes</Link>
          <Link to="/timer">Timer</Link>
          <Link to="/testimonials">Testimonials</Link>
          {/* New link for my UserProfile page */}
          <Link to="/profile">Profile</Link>
        </nav>
      </header>
    </>
  );
}
