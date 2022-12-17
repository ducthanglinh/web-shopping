import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import styles from "./Footer.module.scss";
import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function Footer() {
  return (
    <div className={cx("Footer")}>
      <div className={cx("wrapper")}>
        <p>© 2021, Furns. Made By Duc Thang </p>
        <img src="https://furns-react.netlify.app/_next/image?url=%2Fimages%2Ficons%2Fpayment.png&w=256&q=75" />
      </div>

      <button className={cx("cart")}>
        <FontAwesomeIcon className={cx("icon")} icon={faCartArrowDown} />
        <span className={cx("counter")}>0 Items</span>
        <span className={cx("cost")}>$0</span>
      </button>
    </div>
  );
}

export default Footer;
