import Home from "~/pages/Home";
import About from "~/pages/About";
import Bedroom from "~/pages/HomeFurnitures/Bedroom";
import Dining from "~/pages/HomeFurnitures/Dining";
import Living from "~/pages/HomeFurnitures/Living";
import Lounge from "~/pages/OfficeFurnitures/Lounge";
import OfficeChair from "~/pages/OfficeFurnitures/OfficeChair";
import OfficeTable from "~/pages/OfficeFurnitures/OfficeTable";
import HospitalBed from "~/pages/HospitalFurnitures/HospitalBed";
import HospitalUtility from "~/pages/HospitalFurnitures/HospitalUtility";
import Contact from "~/pages/Contact";

const publicRoutes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/about",
    component: About,
  },
  {
    path: "/bedroom",
    component: Bedroom,
  },
  {
    path: "/dining",
    component: Dining,
  },
  {
    path: "/living",
    component: Living,
  },
  {
    path: "/lounge",
    component: Lounge,
  },
  {
    path: "/office-chair",
    component: OfficeChair,
  },
  {
    path: "/office-table",
    component: OfficeTable,
  },
  {
    path: "/hospital-bed",
    component: HospitalBed,
  },
  {
    path: "/hospital-utility",
    component: HospitalUtility,
  },
  {
    path: "/contact",
    component: Contact,
  },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
