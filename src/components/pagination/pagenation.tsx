import React from "react";
import ReactPaginate from "react-paginate";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import "./pagenation.scss";

function Pagination({ pageCount, jc, handlePageClick }: any) {
  return (
    <div
      className="pager"
      // py={5}
      // w="full"
      // alignItems="center"
      // justifyContent={jc || "div-end"}
      // borderRadius={"10px"}
    >
      <ReactPaginate
        containerClassName="pagination-container"
        breakLabel="..."
        pageClassName="pagination-item"
        pageLinkClassName="pagination-link"
        nextClassName="next-pagination-item"
        previousClassName="prev-pagination-item"
        breakClassName="pagination-item"
        breakLinkClassName="pagination-link"
        previousLabel={<MdChevronLeft size="25px" />}
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        pageCount={pageCount}
        nextLabel={<MdChevronRight size="25px" />}
        activeClassName="active"
        disabledClassName="disabled"
        nextLinkClassName="next-page-link"
        previousLinkClassName="prev-page-link"
      />
    </div>
  );
}

export default Pagination;
