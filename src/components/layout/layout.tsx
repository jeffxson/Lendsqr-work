import React, { useState } from "react";
import { logo } from "../../images/svg";
import { FiSearch } from "react-icons/fi";
import {
  FaUsers,
  FaRegHandshake,
  FaPiggyBank,
  FaCoins,
  FaClipboardList,
} from "react-icons/fa";
import {
  GiPayMoney,
  GiReceiveMoney,
  GiSettingsKnobs,
  GiPriceTag,
} from "react-icons/gi";
import { ImUsers } from "react-icons/im";
import { MdOutlineManageAccounts } from "react-icons/md";
import { BiTransferAlt } from "react-icons/bi";
import {
  BsFillPersonCheckFill,
  BsFillPersonXFill,
  BsBank,
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { IoIosHome, IoIosBriefcase } from "react-icons/io";
import { AiTwotoneSetting, AiOutlineBarChart } from "react-icons/ai";
import { MdPayment } from "react-icons/md";
import { VscTriangleDown, VscBell, VscChevronDown } from "react-icons/vsc";
import profile from "../../images/profile.png";
import "./layout.scss";
import { Link } from "react-router-dom";
const Layout = ({ children }: any) => {
  const [colaps, setColaps] = useState(false);
  const handleColaps = (event: any) => {
    setColaps(!colaps);
  };

  return (
    <div className="whole-app">
      <div className="header">
        <Link to="/dashboard">
          <div>{logo}</div>
        </Link>

        <div className="input-div">
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
      <div className="nav-container">
        <div className={colaps ? "navbar2" : "navbar"}>
          <div onClick={handleColaps} className="colasps">
            {colaps ? (
              <BsFillArrowRightCircleFill size="25px" />
            ) : (
              <BsFillArrowLeftCircleFill size="25px" />
            )}
          </div>
          {colaps ? (
            <>
              <NavlistMobile name="Dashboard" icon={<IoIosHome />} />

              <NavlistMobile name="Users" icon={<ImUsers />} />
              <NavlistMobile name="Guarantors" icon={<FaUsers />} />
              <NavlistMobile name="Loans" icon={<GiPayMoney />} />
              <NavlistMobile name="Decision Models" icon={<FaRegHandshake />} />
              <NavlistMobile name="Saving" icon={<FaPiggyBank />} />
              <NavlistMobile name="Loan Request" icon={<FaCoins />} />
              <NavlistMobile
                name="Whitelist"
                icon={<BsFillPersonCheckFill />}
              />
              <NavlistMobile name="Karma" icon={<BsFillPersonXFill />} />

              <NavlistMobile name="Organization" icon={<IoIosBriefcase />} />
              <NavlistMobile name="Loan products" icon={<GiReceiveMoney />} />
              <NavlistMobile name="Savings products" icon={<BsBank />} />
              <NavlistMobile name="Fees and Charges" icon={<GiPayMoney />} />
              <NavlistMobile name="Saving" icon={<FaPiggyBank />} />
              <NavlistMobile name="Transations" icon={<BiTransferAlt />} />
              <NavlistMobile name="Services" icon={<AiTwotoneSetting />} />
              <NavlistMobile
                name="Services Account"
                icon={<MdOutlineManageAccounts />}
              />
              <NavlistMobile name="Settlement" icon={<MdPayment />} />
              <NavlistMobile name="Reports" icon={<AiOutlineBarChart />} />

              <NavlistMobile name="Preferences" icon={<GiSettingsKnobs />} />
              <NavlistMobile name="Fees and Pricing" icon={<GiPriceTag />} />
              <NavlistMobile name="Audit Logs" icon={<FaClipboardList />} />
            </>
          ) : (
            <>
              <p className="navlist">
                <IoIosBriefcase
                  style={{ marginRight: "10px", marginLeft: "10px" }}
                />
                <b>Switch Organization </b>
                <VscChevronDown
                  style={{ marginRight: "10px", marginLeft: "10px" }}
                />
              </p>
              <Navlist name="Dashboard" icon={<IoIosHome />} />
              <p className="header-text">CUSTOMERS</p>
              <Navlist1 name="Users" icon={<ImUsers />} />
              <Navlist name="Guarantors" icon={<FaUsers />} />
              <Navlist name="Loans" icon={<GiPayMoney />} />
              <Navlist name="Decision Models" icon={<FaRegHandshake />} />
              <Navlist name="Saving" icon={<FaPiggyBank />} />
              <Navlist name="Loan Request" icon={<FaCoins />} />
              <Navlist name="Whitelist" icon={<BsFillPersonCheckFill />} />
              <Navlist name="Karma" icon={<BsFillPersonXFill />} />
              <p className="header-text">BUSINESS</p>

              <Navlist name="Organization" icon={<IoIosBriefcase />} />
              <Navlist name="Loan products" icon={<GiReceiveMoney />} />
              <Navlist name="Savings products" icon={<BsBank />} />
              <Navlist name="Fees and Charges" icon={<GiPayMoney />} />
              <Navlist name="Saving" icon={<FaPiggyBank />} />
              <Navlist name="Transations" icon={<BiTransferAlt />} />
              <Navlist name="Services" icon={<AiTwotoneSetting />} />
              <Navlist
                name="Services Account"
                icon={<MdOutlineManageAccounts />}
              />
              <Navlist name="Settlement" icon={<MdPayment />} />
              <Navlist name="Reports" icon={<AiOutlineBarChart />} />

              <Navlist name="Preferences" icon={<GiSettingsKnobs />} />
              <Navlist name="Fees and Pricing" icon={<GiPriceTag />} />
              <Navlist name="Audit Logs" icon={<FaClipboardList />} />
            </>
          )}
        </div>
        <div className="app-content">{children}</div>
      </div>
    </div>
  );
};

export default Layout;

export const Navlist = ({ name, icon }: any) => {
  return (
    <p className="navlist">
      <div className="letf-square"></div>
      <p>{icon}</p>

      <b>{name}</b>
    </p>
  );
};
export const NavlistMobile = ({ name, icon }: any) => {
  return (
    <p className="navlist">
      <div className="letf-square"></div>
      <p>{icon}</p>

      <div className={`${name}`}></div>
    </p>
  );
};
export const Navlist1 = ({ name, icon }: any) => {
  return (
    <>
      <p className="navlist1">
        <div className="letf-square"></div>
        <p>{icon}</p>

        <b>{name}</b>
      </p>
    </>
  );
};
