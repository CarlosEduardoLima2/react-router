import { Link } from "react-router-dom";
import "./styles.css"

export const Header = () => {
  return (
    <header>
      <nav>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/posts">Posts</Link></li>
        <li><Link to="/posts/10">Posts</Link></li>
      </nav>
    </header>
  )
}

