import Header from "~/components/Layouts/DefaultLayout/Header";
import Navigation from "~/components/Layouts/DefaultLayout/Navigation";
import classNames from "classnames/bind";
import styles from "./Contact.module.scss";
import { Link } from "react-router-dom";
import config from "~/config";
const cx = classNames.bind(styles);

function Contact() {
  return (
    <div>
      <Header />
      <Navigation />
      <div className={cx("aboutHeader")}>
        <h1>ABOUT US</h1>
        <div className={cx("link")}>
          <Link to={config.routes.home} className={cx("linkHome")}>
            HOME
          </Link>{" "}
          <span>/ ABOUT</span>
        </div>
      </div>
    </div>
  );
}

export default Contact;
