import Contact from "./Contact";
import Content from "./Content";
import OurProduct from "./Content/OurProduct";
import Subnav from "./Content/subNav";
import Footer from "./Footer";
import Header from "./Header";
import Navigation from "./Navigation";

function DefaultLayout() {
  return (
    <div>
      <Header />
      <div className="container">
        <Navigation />
        <div className="content">
          <Content />
        </div>
        <div className="Subnav">
          <Subnav />
        </div>
        <div className="OurProducts">
          <OurProduct />
        </div>
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default DefaultLayout;
