import "./Footer.css";
import logo from "../../assets/travellogo.png";

function Footer() {
  // logo
  // created by
  // copyright
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__text">
          <p class="footer__text-copyright">2025 &copy; MemoryMap</p>
          <p class="footer__text-authors">
            Created by: Dustin Goodwin, Georgia Lloyd, Jaimie Bowen, Sky Mandić
          </p>
        </div>
        <img className="footer__logo" src={logo} alt="Memory Map Logo" />
      </div>
    </footer>
  );
}

export default Footer;
