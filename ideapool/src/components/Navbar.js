import { Link } from 'react-router-dom';
import '../css/Navbar.css';

function Navbar() {
  return (
    <div className='navbar'>
    <nav>
      <div class="menu-icon">
            <span class="fas fa-bars"></span>
         </div>
         <div class="logo">
            IdeaPool
         </div>
         <div class="nav-items">
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/profile">Profile</Link></li>
            <li><Link to="/ideas">Ideas</Link></li>
            <li><Link to="/home">Contact</Link></li>
            <li><Link to="/home">Feedback</Link></li>
         </div>
         <div class="search-icon">
            <span class="fas fa-search"></span>
         </div>
         <div class="cancel-icon">
            <span class="fas fa-times"></span>
         </div>
         <form action="#">
            <input type="search" class="search-data" placeholder="Search" required />
            <button type="submit" class="fas fa-search"></button>
         </form>
         </nav>
    </div>
  );
}

export default Navbar;