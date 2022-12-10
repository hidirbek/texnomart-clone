import "./SubHeader.css";
import { MdLocalFireDepartment } from "react-icons/md";
import Catalog from "../catalog/Catalog";
const SubHeader = () => {

  return (
    <div className="subheader">
      <div className="container">
        <ul className="subheader_navlist">
          <li
            className="subheader_navItem"

          >
            <Catalog/>
          </li>
          <li className="subheader_navItem sales">
            <MdLocalFireDepartment className="fire-icon" />
            AКЦИЯЛАР
          </li>
          <li className="subheader_navItem">СМАРТФОНЛАР</li>
          <li className="subheader_navItem">МУЗЛАТГИЧЛАР</li>
          <li className="subheader_navItem">ЧАНГЮТКИЧЛАР</li>
          <li className="subheader_navItem">ХАВО СОВУТГИЧЛАР</li>
          <li className="subheader_navItem">НОУТБУКЛАР</li>
          <li className="subheader_navItem">ТЕЛЕВИЗОРЛАР</li>
          <li className="subheader_navItem">БАРЧА КАТЕГОРИЯЛАР</li>
        </ul>
      </div>
    </div>
  );
};

export default SubHeader;
