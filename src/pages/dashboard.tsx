import React from "react";
import { logo } from "../images/svg";
import { FiSearch } from "react-icons/fi";
import { FaUsers, FaRegHandshake, FaPiggyBank } from "react-icons/fa";
import { GiPayMoney } from "react-icons/gi";
import { ImUsers } from "react-icons/im";
import { IoIosHome, IoIosBriefcase } from "react-icons/io";
import { VscTriangleDown, VscBell, VscChevronDown } from "react-icons/vsc";
import profile from "../images/profile.png";
import "../styles/login.scss";
const Dashboard = () => {
  return (
    <div>
      <div className="header">
        <div>{logo}</div>
        <div>
          <label>
            <input type="text" placeholder="Email" />
            <button>
              <FiSearch />
            </button>
          </label>
        </div>
        <div className="left-container">
          <a href="/">Doc</a>
          <div className="bell">
            <VscBell size="25px" />
          </div>

          <div className="profile">
            <img
              src={profile}
              alt="profile-pice"
              className="profile-pic"
              height="40px"
            />
            <div className="namer">
              Adedeji <VscTriangleDown />
            </div>
          </div>
        </div>
      </div>
      <div className="navbar">
        <p className="navlist">
          <IoIosBriefcase style={{ marginRight: "10px", marginLeft: "10px" }} />
          <b>Switch Organization </b>
          <VscChevronDown style={{ marginRight: "10px", marginLeft: "10px" }} />
        </p>

        <Navlist name="Dashboard" icon={<IoIosHome />} />
        <Navlist name="Users" icon={<ImUsers />} />
        <Navlist name="Guarantors" icon={<FaUsers />} />
        <Navlist name="Loanns" icon={<GiPayMoney />} />
        <Navlist name="Decision Models" icon={<FaRegHandshake />} />
        <Navlist name="Saving" icon={<FaPiggyBank />} />
        <Navlist name="Loan Request" icon={<IoIosHome />} />
        <Navlist name="Dashboard" icon={<IoIosHome />} />
        <Navlist name="Dashboard" icon={<IoIosHome />} />
      </div>
    </div>
  );
};

export default Dashboard;

export const Navlist = ({ name, icon }: any) => {
  return (
    <p className="navlist">
      <p>{icon}</p>

      <b>{name}</b>
    </p>
  );
};
