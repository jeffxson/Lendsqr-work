import React, { useEffect, useState } from "react";
import Layout from "../components/layout/layout";
import "../styles/dashboard.scss";
import { FaUsers } from "react-icons/fa";
import { BiFilter } from "react-icons/bi";
import { MdCancel } from "react-icons/md";
import { BsThreeDotsVertical } from "react-icons/bs";
import axios from "axios";
import Pagination from "../components/pagenation";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import * as moment from "moment";

export interface InitPost {
  [x: string]: any;
  orgName: string;
  userName: string;
  email: string;
  phoneNumber: string;
  created_at: Date;
  author: string;
}

const Dashboard = () => {
  const [users, setUsers] = useState<any[]>([]);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [itemOffset, setItemOffset] = useState(0);
  const [pageCount, setPageCount] = useState(0);
  const [currentItems, setCurrentItems] = useState<any[]>([]);
  const [filter, setFilter] = useState(false);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(users.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(users.length / itemsPerPage));
  }, [itemOffset, users, itemsPerPage]);

  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * itemsPerPage) % users?.length;
    setItemOffset(newOffset);
  };

  const handlefilter = (event: any) => {
    setFilter(!filter);
  };

  useEffect(() => {
    axios
      .get(`https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users`)
      .then((res: any) => {
        setUsers(res.data);
      })
      .catch((err: any) => {
        console.log(err);
      });
  }, [users]);

  const handleSelector = (e: any) => {
    setItemsPerPage(e.target.value);
  };

  return (
    <Layout>
      <h3>
        <b> Users</b>
      </h3>

      <div className="boxs-container">
        <Boxes names="USERS" numbers="4,566" color="#DF18FF" bg="#fce8ff" />
        <Boxes
          names="ACTIVE USERS"
          numbers="5,466"
          color="#5718FF"
          bg="#eee8ff"
        />
        <Boxes
          names="USERS WITH LOANS"
          numbers="12,566"
          color="#F55F44"
          bg="#feefec"
        />
        <Boxes
          names="USERS WITH SAVINGS"
          numbers="105,566"
          color="#FF3366"
          bg="#ffebf0"
        />
      </div>
      <div>
        <div className="containers">
          <table>
            <thead>
              <tr>
                <th>
                  <b>
                    ORGANIZATION
                    <BiFilter
                      onClick={handlefilter}
                      size="20px"
                      style={{ marginBottom: "-5px" }}
                    />
                  </b>
                </th>
                <th>
                  <b>
                    USERNAME
                    <BiFilter
                      onClick={handlefilter}
                      size="20px"
                      style={{ marginBottom: "-5px" }}
                    />
                  </b>
                </th>
                <th>
                  <b>
                    EMAIL
                    <BiFilter
                      onClick={handlefilter}
                      size="20px"
                      style={{ marginBottom: "-5px" }}
                    />
                  </b>
                </th>
                <th>
                  <b>
                    PHONE NUMBER
                    <BiFilter
                      onClick={handlefilter}
                      size="20px"
                      style={{ marginBottom: "-5px" }}
                    />
                  </b>
                </th>
                <th>
                  <b>
                    DATE JOINED
                    <BiFilter
                      onClick={handlefilter}
                      size="20px"
                      style={{ marginBottom: "-5px" }}
                    />
                  </b>
                </th>
                <th>
                  <b>
                    STATUS
                    <BiFilter
                      onClick={handlefilter}
                      size="20px"
                      style={{ marginBottom: "-5px" }}
                    />
                  </b>
                </th>
                <th>
                  <b>?</b>
                </th>
              </tr>
            </thead>
            <tbody>
              {currentItems.length > 0 ? (
                currentItems.map((data) => (
                  <tr>
                    <td>{data.orgName}</td>
                    <td>{data.userName}</td>
                    <td>{data.email}</td>
                    <td>{data.phoneNumber.slice(0, 13)} </td>
                    <td>
                      {" "}
                      {moment
                        .default(data.createdAt)
                        .format("MMM DD, YYYY HH:mm")}
                    </td>
                    <td>
                      {Date.now() > Date.parse(data.lastActiveDate) ? (
                        <Status name="Inactive" color="#545F7D" bg="#f5f5f7" />
                      ) : Date.now() === Date.parse(data.lastActiveDate) ? (
                        <Status name="Pending" color="#39CD62" bg="#f1faf4" />
                      ) : Date.parse(data.lastActiveDate) === 0 ? (
                        <Status
                          name="Blacklisted"
                          color="#39CD62"
                          bg="#f1faf4"
                        />
                      ) : (
                        <Status name="Active" color="#39CD62" bg="#f1faf4" />
                      )}
                    </td>
                    <td>
                      <BsThreeDotsVertical />
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td>
                    <Skeleton count={10} height="6vh" width="100%" />
                  </td>
                  <td>
                    <Skeleton count={10} height="6vh" width="100%" />
                  </td>
                  <td>
                    <Skeleton count={10} height="6vh" width="100%" />
                  </td>
                  <td>
                    <Skeleton count={10} height="6vh" width="100%" />
                  </td>
                  <td>
                    <Skeleton count={10} height="6vh" width="100%" />
                  </td>
                  <td>
                    <Skeleton count={10} height="6vh" width="100%" />
                  </td>
                </tr>
              )}
            </tbody>
            {filter ? (
              <div className="filter-container">
                <div className="left">
                  <MdCancel size="30px" onClick={handlefilter} />
                </div>
                <label>
                  <span>Organization</span>
                  <br></br>
                  <select>
                    <option>Select</option>
                  </select>
                </label>
                <br></br>
                <Inputers names="Username" place="User" type="text" />
                <Inputers names="Email" place="Email" type="email" />
                <Inputers names="Date" place="Date" type="date" />
                <Inputers
                  names="Phone Number"
                  place="Phone Number"
                  type="number"
                />
                <br></br>
                <label>
                  <span>Status</span>
                  <br></br>
                  <select>
                    <option>Select</option>
                  </select>
                </label>
                <div className="button-container">
                  <button>
                    <b>Reset </b>
                  </button>
                  <button className="button2">Filter</button>
                </div>
              </div>
            ) : (
              ""
            )}
          </table>
        </div>
        <div className="paginate">
          <div>
            Showing
            <select onChange={handleSelector}>
              <option value="10">10</option>
              <option value="50">50</option>
              <option value="100">100</option>
              <option value="150">150</option>
              <option value="200">200</option>
            </select>
            out of {users.length}
          </div>
          <Pagination
            pageCount={isNaN(pageCount) ? 0 : pageCount}
            handlePageClick={handlePageClick}
          />
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;

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
