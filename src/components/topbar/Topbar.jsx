import "./topbar.scss";
import { Person, Mail } from "@material-ui/icons";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillMail } from 'react-icons/ai';

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            satish.
          </a>
          {/* <div className="itemContainer">
            <Person className="icon" />
            <span>+44 924 12 74</span>
          </div> */}
          <div className="itemContainer">
            <a href="mailto:satishrjk07@gmail.com" style={{textdecoration:"none",color:'black'}}>
            {/* <Mail className="icon"  /> */}
            <AiFillMail className="icon" size="2rem" />
            </a>
            {/* <span>satishrjk07@gmail.com</span> */}
          </div>
          <div className="itemContainer">
            <a href="https://github.com/sa30h" style={{textdecoration:"none",color:'black'}}>
            <AiFillGithub size="2rem" />
            </a>
            {/* <span>satishrjk07@gmail.com</span> */}
          </div>
          <div className="itemContainer">
            <a href="https://www.linkedin.com/in/satish-rajak-sa30/" style={{textdecoration:"none",color:'black'}}>
            <AiFillLinkedin size="2rem" />
            </a>
            {/* <span>satishrjk07@gmail.com</span> */}
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
