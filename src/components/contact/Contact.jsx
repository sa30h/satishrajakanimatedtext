import { useState } from "react";
import "./contact.scss";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillMail } from 'react-icons/ai';

export default function Contact() {
  const [message, setMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  };
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/shake.svg" alt="" />
      </div>
      <div className="right">
        <div style={{display:"flex",flexdirection:'row'}}>
        <a href="mailto:satishrjk07@gmail.com" style={{textdecoration:"none",color:'black'}}>
      <AiFillMail  size="2.5rem" />
      </a>
      <p style={{paddingTop:15}}>satishrjk07@gmail</p>
        </div>

        <div style={{display:"flex",flexdirection:'row'}}>
        <a href="https://www.linkedin.com/in/satish-rajak-sa30/" style={{textdecoration:"none",color:'black'}}>
      <AiFillLinkedin  size="2.5rem" />
      </a>
      <p style={{paddingTop:15}}>/satish-rajak-sa30</p>
        </div>

        <div style={{display:"flex",flexdirection:'row'}}>
        <a href="https://github.com/sa30h" style={{textdecoration:"none",color:'black'}}>
      <AiFillGithub  size="2.5rem" />
      </a>
      <p style={{paddingTop:15}}>github.com/sa30h</p>
        </div>

        {/* <h2>Contact.</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Email" />
          <textarea placeholder="Message"></textarea>
          <button type="submit">Send</button>
          {message && <span>Thanks, I'll reply ASAP :)</span>}
        </form> */}
      </div>
    </div>
  );
}
