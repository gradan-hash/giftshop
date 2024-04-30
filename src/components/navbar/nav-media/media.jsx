import React from "react";
import "./media.css";
import { RiTwitterXFill } from "react-icons/ri";
import { BsFacebook, BsInstagram, BsWhatsapp } from "react-icons/bs";

function NavMedia() {
  return (
    <>
      <nav className="nav-media">
        <div className="media-links">
          <div className="links">
            <a
              href="https://twitter.com/yourtwitterhandle"
              rel="noopener noreferrer"
              target="_blank"
            >
              <RiTwitterXFill className="icon-links" />
            </a>
          </div>

          <div className="links">
            <a
              href="https://twitter.com/yourtwitterhandle"
              rel="noopener noreferrer"
              target="_blank"
            >
              <BsFacebook className="icon-links" />
            </a>
          </div>

          <div className="links">
            <a
              href="https://instagram.com/k.i.n.g_s.h.e.l.b.y?igshid=OGQ5ZDc2ODk2ZA=="
              rel="noopener noreferrer"
              target="_blank"
            >
              <BsInstagram className="icon-links" />
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavMedia;
