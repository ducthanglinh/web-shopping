import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

import classNames from "classnames/bind";
import styles from "./Navigation.module.scss";
const cx = classNames.bind(styles);

function Navigation() {
  const menuLists = [
    {
      id: 1,
      name: "Home",
    },
    {
      id: 2,
      name: "About",
    },
    {
      id: 1,
      name: "Home Furniture",
      icon: <FontAwesomeIcon icon={faChevronDown} />,
      more: [
        {
          title: "Bedroom",
        },
        {
          title: "Dining",
        },
        {
          title: "Living",
        },
      ],
    },
    {
      id: 1,
      name: "Office Furniture",
      icon: <FontAwesomeIcon icon={faChevronDown} />,
      more: [
        {
          title: "Lounge",
        },
        {
          title: "Office Chair",
        },
        {
          title: "Office Table",
        },
      ],
    },
    {
      id: 1,
      name: "Hospital Furniture",
      icon: <FontAwesomeIcon icon={faChevronDown} />,
      more: [
        {
          title: "Hospital Bed",
        },
        {
          title: "Hospital Utility",
        },
      ],
    },
    {
      id: 1,
      name: "Contact",
    },
  ];
  return (
    <div className={cx("wrapper")}>
      <ul className={cx("menu")}>
        <li className={cx("menuTitle")}>
          <a href="#">Home</a>
        </li>
        <li className={cx("menuTitle")}>
          <a href="#">About</a>
        </li>
        <li className={cx("menuTitle")}>
          <a href="#">
            Home Furniture
            <FontAwesomeIcon className={cx("down-icon")} icon={faChevronDown} />
          </a>
          <ul className={cx("menuItem")}>
            <li>
              <a href="#">Bedroom</a>
            </li>
            <li>
              <a href="#">Dining</a>
            </li>
            <li>
              <a href="#">Living</a>
            </li>
          </ul>
        </li>
        <li className={cx("menuTitle")}>
          <a href="#">
            Office Furniture
            <FontAwesomeIcon className={cx("down-icon")} icon={faChevronDown} />
          </a>
          <ul className={cx("menuItem")}>
            <li>
              <a href="#">Lounge</a>
            </li>
            <li>
              <a href="#">Office Chair</a>
            </li>
            <li>
              <a href="#">Office Table</a>
            </li>
          </ul>
        </li>
        <li className={cx("menuTitle")}>
          <a href="#">
            Hospital Furniture
            <FontAwesomeIcon className={cx("down-icon")} icon={faChevronDown} />
          </a>
          <ul className={cx("menuItem")}>
            <li>
              <a href="#">Hospital Bed </a>
            </li>
            <li>
              <a href="#">Hospital Unility </a>
            </li>
          </ul>
        </li>
        <li className={cx("menuTitle")}>
          <a href="#">Contact</a>
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
