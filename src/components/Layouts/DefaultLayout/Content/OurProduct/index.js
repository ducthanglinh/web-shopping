import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import classNames from "classnames/bind";
import styles from "./OurProduct.module.scss";
const cx = classNames.bind(styles);
function OurProduct() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("content-title")}>
        <h2 className={cx("title")}>Our Products</h2>
        <p className={cx("des")}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elitsed do eiusmo
          tempor incididunt ut labore
        </p>
      </div>

      <div className={cx("tabs-container")}>
        <Tabs>
          <TabList>
            <Tab>New Arrival</Tab>
            <Tab>Feature</Tab>
            <Tab>On Sale</Tab>
            <Tab>Tending</Tab>
          </TabList>
        </Tabs>
      </div>
    </div>
  );
}

export default OurProduct;
