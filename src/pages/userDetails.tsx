import React, { useEffect, useState } from "react";
import Layout from "../components/layout/layout";
import "../styles/userdetails.scss";
import { BiArrowBack } from "react-icons/bi";
import { BsStarFill, BsStar } from "react-icons/bs";
import axios from "axios";
import "react-loading-skeleton/dist/skeleton.css";
import { Link } from "react-router-dom";

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
        <Link to="/dashboard">
          <BiArrowBack /> Back to Users
        </Link>
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
              src={users?.profile?.avatar}
              alt="profile-pice"
              className="profile-pic"
              height="80px"
            />
            <div>
              <div className="names">
                <h5>
                  {users?.profile?.firstName} {users?.profile?.lastName}
                </h5>
                <p className="header-text">{users?.accountNumber}</p>
              </div>
            </div>
          </div>
          <div className="User-Tier">
            <p className="header-text"> User's Tier</p>
            <div className="star">
              <BsStarFill />
              <BsStar />
              <BsStar />
            </div>
          </div>
          <div className="User-Tier2">
            <h5>₦ {users?.accountBalance}</h5>
            <p className="header-text">9912345678/Providus Bank</p>
          </div>
        </div>
        <div className="user-nav">
          <p className="seleted">Genaral</p>
          <p>Documents</p>
          <p>Bank Details</p>
          <p>Loans</p>
          <p>Savings</p>
          <p>App and System</p>
        </div>
      </div>

      <div className="user-container">
        <h5>Personal Information</h5>

        <div className="text-containers">
          <div>
            <Texts
              content={`${users?.profile?.firstName} ${users?.profile?.lastName}`}
              names="FULL NAME"
            />
            <Texts content="Single" names="MARITAL STATUS" />
          </div>
          <div>
            <Texts
              content={`${
                users?.phoneNumber && users?.phoneNumber.slice(0, 13)
              } `}
              names="PHONE NUMBER"
            />
            <Texts content="None" names="CHILDREN" />
          </div>
          <div>
            <Texts content="Parent's Apartment" names="TYPE OF RESIDENCE" />
            <Texts content={`${users?.email}  `} names="EMAIL" />
          </div>
          <div>
            <Texts content={`${users?.profile?.bvn} `} names="BVN" />
          </div>
          <div>
            <Texts content={`${users?.profile?.gender} `} names="GENDER" />
          </div>
        </div>
        <hr></hr>
        <h5>Education and Employment</h5>

        <div className="text-containers">
          <div>
            <Texts
              content={`${users?.education?.level} `}
              names="LEVEL OF EDUCATION"
            />
            <Texts
              content={`${users?.education?.officeEmail} `}
              names="OFFICE EMAIL"
            />
          </div>
          <div>
            <Texts
              content={`${users?.education?.sector} `}
              names="SECTOR OF EMPLOYMENT"
            />
            <Texts
              content={`₦${users?.education?.monthlyIncome[0]} - ₦${users?.education?.monthlyIncome[1]} `}
              names="MONTHLY INCOME"
            />
          </div>
          <div>
            <Texts
              content={`${users?.education?.employmentStatus} `}
              names="EMPLOYMENT STATUS"
            />
            <Texts
              content={`${users?.education?.loanRepayment} `}
              names="LOAN REPAYMENT"
            />
          </div>
          <div>
            <Texts
              content={`${users?.education?.duration} `}
              names="DURATION OF EMPLOYMENT"
            />
          </div>
        </div>
        <hr></hr>
        <h5>Socials</h5>

        <div className="text-containers">
          <Texts content={`${users?.socials?.twitter} `} names="TWITTER" />
          <Texts content={`${users?.socials?.facebook} `} names="FACEBOOK" />

          <Texts content={`${users?.socials?.instagram} `} names="INSTAGRAM" />
        </div>
        <hr></hr>
        <h5>Guarantor</h5>

        <div className="text-containers">
          <Texts
            content={`${users?.guarantor?.firstName} ${users?.guarantor?.lastName}`}
            names="FULL NAME"
          />
          <Texts
            content={`${
              users?.guarantor?.phoneNumber &&
              users?.guarantor?.phoneNumber.slice(0, 13)
            } `}
            names="PHONE NUMBER"
          />

          <Texts
            content={`${users?.education?.officeEmail} `}
            names="EMAIL ADDRESS"
          />
          <Texts content={`Sister`} names="RELATIONSHIP" />
        </div>
        <hr></hr>
        <h5>Guarantor</h5>

        <div className="text-containers">
          <Texts
            content={`${users?.guarantor?.firstName} ${users?.guarantor?.lastName}`}
            names="FULL NAME"
          />
          <Texts
            content={`${
              users?.guarantor?.phoneNumber &&
              users?.guarantor?.phoneNumber.slice(0, 13)
            } `}
            names="PHONE NUMBER"
          />

          <Texts
            content={`${users?.education?.officeEmail} `}
            names="EMAIL ADDRESS"
          />
          <Texts content={`Sister`} names="RELATIONSHIP" />
        </div>
        <br></br>
        <br></br>
      </div>
    </Layout>
  );
};

export default UserDetails;

export const Texts = ({ content, names }: any) => {
  return (
    <>
      <div className="names">
        <p className="header-text">{names}</p>
        <div className="text-contest">
          <b>{content}</b>
          <br></br>
        </div>
      </div>
    </>
  );
};
