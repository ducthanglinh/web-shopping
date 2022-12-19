import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faUser,
  faBagShopping,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import routes from "~/config/routes";
const cx = classNames.bind(styles);
function Header() {
  return (
    <header className={cx("wrapper")}>
      <div className={cx("content")}>
        <div className={cx("logo")}>
          <img
            src="https://furns-react.netlify.app/_next/image?url=%2Fimages%2Flogo%2Flogo.png&w=1920&q=75"
            alt="logo"
          />
        </div>
        <div className={cx("tools")}>
          <div className={cx("dvTool")}>
            <button className={cx("search")}>
              <FontAwesomeIcon
                className={cx("search-icon")}
                icon={faMagnifyingGlass}
              />
            </button>
          </div>
          <div className={cx("dvTool")}>
            <button className={cx("user")}>
              <FontAwesomeIcon className={cx("user-icon")} icon={faUser} />
              <ul className={cx("iconList")}>
                <li className={cx("iconItem")}>
                  <Link to={routes.login} className={cx("iconLink")}>
                    Signin
                  </Link>
                </li>
                <li className={cx("iconItem")}>
                  <a className={cx("iconLink")} href="#">
                    Cart
                  </a>
                </li>
                <li className={cx("iconItem")}>
                  <a className={cx("iconLink")} href="#">
                    Wishlist
                  </a>
                </li>
                <li className={cx("iconItem")}>
                  <a className={cx("iconLink")} href="#">
                    Compare
                  </a>
                </li>
              </ul>
            </button>
          </div>
          <div className={cx("dvTool")}>
            <button className={cx("cart")}>
              <FontAwesomeIcon
                className={cx("cart-icon")}
                icon={faBagShopping}
              />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
