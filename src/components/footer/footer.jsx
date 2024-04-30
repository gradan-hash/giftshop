import React from "react";
import "./footer.css";
import { FaSquareInstagram } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";

function Footer() {
  return (
    <>
      <footer>
        <div className="inner-footer">
          <div className="contact">
            <p>Reach out to:</p>

            <a href="tel:+254706281524" className="tel-contact">
              +254706281524
            </a>
          </div>

          <div className="media">
            <p>Social Media</p>

            <a
              href="https://instagram.com/k.i.n.g_s.h.e.l.b.y?igshid=OGQ5ZDc2ODk2ZA=="
              rel="noopener noreferrer"
              target="_blank"
              className="media-icon"
            >
              <FaSquareInstagram />
            </a>

            <a
              href="https://wa.me/254706281524"
              rel="noopener noreferrer"
              target="_blank"
              className="media-icon"
            >
              <IoLogoWhatsapp />
            </a>
          </div>

          <div className="policies">
            <p>Policies</p>

            <h3>Delivery Policies</h3>
            <h3>Return and Refund Policy</h3>
            <h3>Personalization Policy</h3>
          </div>

          {/* <div className='account'>

                        <p>My Account</p>

                    </div> */}
        </div>
      </footer>
    </>
  );
}

export default Footer;
