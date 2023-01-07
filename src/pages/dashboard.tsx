import React, { useEffect, useState } from "react";
import Layout from "../components/layout/layout";
import "../styles/dashboard.scss";
import { FaUsers } from "react-icons/fa";
import { BiFilter } from "react-icons/bi";
import { BsThreeDotsVertical } from "react-icons/bs";
import axios from "axios";
import Pagination from "../components/pagenation";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

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

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(users.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(users.length / itemsPerPage));
  }, [itemOffset, users, itemsPerPage]);

  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * itemsPerPage) % users?.length;
    setItemOffset(newOffset);
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
                    ORGANIZATION <BiFilter />
                  </b>
                </th>
                <th>
                  <b>
                    USERNAME <BiFilter />
                  </b>
                </th>
                <th>
                  <b>
                    EMAIL <BiFilter />
                  </b>
                </th>
                <th>
                  <b>
                    PHONE NUMBER <BiFilter />
                  </b>
                </th>
                <th>
                  <b>
                    DATE JOINED
                    <BiFilter />
                  </b>
                </th>
                <th>
                  <b>
                    STATUS <BiFilter />
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
                    <td>{data.createdAt.slice(0, 10)}</td>
                    <td>{data.lastActiveDate.slice(0, 10)}</td>
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
