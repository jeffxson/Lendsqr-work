import React, { useEffect, useState } from "react";
import Layout from "../components/layout/layout";
import "../styles/userdetails.scss";
import { FaUsers } from "react-icons/fa";
import { BiArrowBack } from "react-icons/bi";
import { MdCancel } from "react-icons/md";
import { BsThreeDotsVertical } from "react-icons/bs";
import axios from "axios";
import Pagination from "../components/pagenation";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import profile from "../images/profile.png";

const UserDetails = () => {
  const [users, setUsers] = useState<any>([]);
  const [filter, setFilter] = useState(false);

  const handlefilter = (event: any) => {
    setFilter(!filter);
  };

  useEffect(() => {
    axios
      .get(`https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/6`)
      .then((res: any) => {
        setUsers(res.data);
      })
      .catch((err: any) => {
        console.log(err);
      });
  }, [users]);

  return (
    <Layout>
      <div className="breadcrums">
        <BiArrowBack /> Back to Users
      </div>
      <div className="header-box">
        <h3>
          <b> Users</b>
        </h3>
        <div className="button-container">
          <button>
            <b> Activate User </b>
          </button>
          <button className="button2">
            <b>Blacklist User </b>
          </button>
        </div>
      </div>
      <div className="user-container">
        <div className="user-details">
          <div className="profile">
            <img
              src={profile}
              alt="profile-pice"
              className="profile-pic"
              height="80px"
            />
            <div>
              <h5>{users?.profile?.firstName}</h5>
            </div>
          </div>
          <div className="profile">
            <img
              src={profile}
              alt="profile-pice"
              className="profile-pic"
              height="80px"
            />
            <div>
              <h5>{users?.profile?.firstName}</h5>
            </div>
          </div>
          <div className="profile">
            <img
              src={profile}
              alt="profile-pice"
              className="profile-pic"
              height="80px"
            />
            <div>
              <h5>{users?.profile?.firstName}</h5>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default UserDetails;

export const Boxes = ({ color, names, numbers, bg }: any) => {
  return (
    <>
      <div className="box1">
        <p style={{ color: `${color}`, background: `${bg}` }}>
          <FaUsers size="20px" />
        </p>
        {names}
        <h4>{numbers}</h4>
      </div>
    </>
  );
};

export const Status = ({ color, bg, name }: any) => {
  return (
    <p className="status" style={{ color: `${color}`, background: `${bg}` }}>
      <b> {name}</b>
    </p>
  );
};
export const Inputers = ({ type, names, place, bg }: any) => {
  return (
    <>
      <br></br>
      <label>
        <span>{names}</span>
        <br></br>
        <input type={type} placeholder={place} />
      </label>
      <br></br>
    </>
  );
};
