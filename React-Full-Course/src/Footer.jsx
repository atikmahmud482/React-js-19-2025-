import React from "react";

function Footer() {
  return (
    <footer>
      <p>&copy; {new Date().getFullYear()} My Website</p>
      <nav>
        <ul>
          <li>
            <a href="#privacy">Privacy Policy</a>
          </li>
          <li>
            <a href="#terms">Terms of Service</a>
          </li>
          <li>
            <a href="#contact">Contact Us</a>
          </li>
        </ul>
      </nav>
    </footer>
  );
}

export default Footer;
