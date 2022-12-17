import classNames from "classnames/bind";
import styles from "./Contact.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faLinkedin,
  faYoutube,
  faPinterest,
} from "@fortawesome/free-brands-svg-icons";

const cx = classNames.bind(styles);

function Contact() {
  return (
    <div className={cx("contact")}>
      <div className={cx("container")}>
        <div className={cx("aboutUs")}>
          <h2 className={cx("title")}>ABOUT US</h2>
          <p className={cx("des")}>
            Lorem ipsum dolor sit amet cons adipisicing elit sed do eiusm tempor
            incididunt ut labor et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud.
          </p>
          <div className={cx("socialIcon")}>
            <button className={cx("iconBtn")}>
              <FontAwesomeIcon className={cx("iconLink")} icon={faFacebook} />
            </button>
            <button className={cx("iconBtn")}>
              <FontAwesomeIcon className={cx("iconLink")} icon={faTwitter} />
            </button>
            <button className={cx("iconBtn")}>
              <FontAwesomeIcon className={cx("iconLink")} icon={faLinkedin} />
            </button>
            <button className={cx("iconBtn")}>
              <FontAwesomeIcon className={cx("iconLink")} icon={faYoutube} />
            </button>
            <button className={cx("iconBtn")}>
              <FontAwesomeIcon className={cx("iconLink")} icon={faPinterest} />
            </button>
          </div>
        </div>
        <div className={cx("infomation")}>
          <h2 className={cx("title")}>IMFORMATION</h2>
          <ul className={cx("listInfo")}>
            <li className={cx("infoItem")}>
              <a className={cx("infoLink")} href="#">
                About Us
              </a>
            </li>
            <li className={cx("infoItem")}>
              <a className={cx("infoLink")} href="#">
                Manufactures
              </a>
            </li>
            <li className={cx("infoItem")}>
              <a className={cx("infoLink")} href="#">
                Tracking Oders
              </a>
            </li>
            <li className={cx("infoItem")}>
              <a className={cx("infoLink")} href="#">
                Privacy & Policy
              </a>
            </li>
            <li className={cx("infoItem")}>
              <a className={cx("infoLink")} href="#">
                Term & Conditions
              </a>
            </li>
          </ul>
        </div>
        <div className={cx("account")}>
          <h2 className={cx("title")}>MY ACCOUNT</h2>
          <ul className={cx("listAccount")}>
            <li className={cx("accountItem")}>
              <a className={cx("accountLink")} href="#">
                Login
              </a>
            </li>
            <li className={cx("accountItem")}>
              <a className={cx("accountLink")} href="#">
                My Cart
              </a>
            </li>
            <li className={cx("accountItem")}>
              <a className={cx("accountLink")} href="#">
                Wishlist
              </a>
            </li>
            <li className={cx("accountItem")}>
              <a className={cx("accountLink")} href="#">
                Compare
              </a>
            </li>
            <li className={cx("accountItem")}>
              <a className={cx("accountLink")} href="#">
                My Account
              </a>
            </li>
          </ul>
        </div>
        <div className={cx("newLetters")}>
          <h2 className={cx("title")}>NEWLETTERS</h2>
          <div className={cx("divSub")}>
            <input
              className={cx("input")}
              type="text"
              placeholder="Enter E-Mail Edress"
            />
            <button className={cx("btnSub")}> Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
