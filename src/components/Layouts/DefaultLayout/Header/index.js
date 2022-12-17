import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faUser,
  faBagShopping,
} from "@fortawesome/free-solid-svg-icons";
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
          <button className={cx("search")}>
            <FontAwesomeIcon
              className={cx("search-icon")}
              icon={faMagnifyingGlass}
            />
          </button>
          <button className={cx("user")}>
            <FontAwesomeIcon className={cx("user-icon")} icon={faUser} />
          </button>
          <button className={cx("cart")}>
            <FontAwesomeIcon className={cx("cart-icon")} icon={faBagShopping} />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
