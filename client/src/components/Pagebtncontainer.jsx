import React from "react";
import { useAppContext } from "../context/appContext";
import { HiChevronDoubleLeft, HiChevronDoubleRight } from "react-icons/hi";
import Wrapper from "../assets/wrappers/PageBtnContainer";

const Pagebtncontainer = () => {
  const { numofPages, page, changePage } = useAppContext();

  const pages = Array.from({ length: numofPages }, (_, index) => {
    return index + 1;
  });

  const prevPage = () => {
    let newPage = page - 1;
    if(newPage < 1){
        newPage = numofPages
    }
    changePage(newPage)
  };

  const nextPage = () => {
    let newPage = page + 1;
    if(newPage >  numofPages){
        newPage = 1
    }
    changePage(newPage)
  };


  return (
    <Wrapper>
      <button className="prev-btn" onClick={prevPage}>
        <HiChevronDoubleLeft />
        prev
      </button>
      <div className="btn-container">
        {pages.map((pageNum) => {
          return (
            <button
              type="button"
              className={pageNum === page ? "pageBtn active" : "pageBtn"}
              key={pageNum}
              onClick={() => changePage(pageNum)}
            >
              {pageNum}
            </button>
          );
        })}
      </div>
      <button className="next-btn" onClick={nextPage}>
        next
        <HiChevronDoubleRight />
      </button>
    </Wrapper>
  );
};

export default Pagebtncontainer;
