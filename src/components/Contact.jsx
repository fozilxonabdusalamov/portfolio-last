import { MdEmail } from "react-icons/md";
import "../style/Contact.css";
import { IoMdMap } from "react-icons/io";
import { IoIosPhonePortrait } from "react-icons/io";

function Contact() {
  return (
    <div className="contact_container">
      <div className="contact_section">
        <form action="">
          <label htmlFor="fullname">
            Your Full Name ( Required)
            <input type="text" id="fullname" required />
          </label>
          <label htmlFor="email">
            Your Email ( Required)
            <input type="email" id="email" required />
          </label>
          <label htmlFor="subject">
            Your Subject ( Required)
            <input type="text" id="subject" required />
          </label>
          <label htmlFor="message">
            Your Message ( Required)
            <textarea id="message" required></textarea>
          </label>
          <button type="submit">Send Message</button>
        </form>
        <div className="contact_info">
          <h2>Contact Information</h2>
          <div className="info_item">
            <IoMdMap />
            <p>
              Country: <span>Uzbekistan</span>
            </p>
            <p>
              City: <span>Namangan</span>
            </p>
            <p>
              Street: <span>Yangi Hayot</span>
            </p>
          </div>
          <div className="info_item">
            <MdEmail />
            <p>
              Email: <span>fozilxonabdusalamov2006@gmail.com</span>
            </p>
            <p>
              Telegram: <span>@fozilxon25x</span>
            </p>
            <p>
              Instagram: <span>fozilxon25x</span>
            </p>
          </div>
          <div className="info_item">
            <IoIosPhonePortrait />
            <p>
              Support: <span>+998 90 123 45 67</span>
            </p>
            <p>
              WhatsApp: <span>+998 90 123 45 67</span>
            </p>
            <p>
              Phone: <span>+998 90 123 45 67</span>
            </p>
          </div>
        </div>
      </div>
      <div className="footer">
        © {new Date().getFullYear()} Fozilxon Abdusalamov. All Rights Reserved.
      </div>
    </div>
  );
}

export default Contact;
