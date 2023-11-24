import React from "react";

const Pagination = ({
  previousPage,
  nextPage,
  navigatePage,
  page,
  totalPages,
}) => {
  return (
    <div style={{ display: "flex" }}>
      <button onClick={previousPage}>{"<"}</button>
      {totalPages >= 1 && (
        <button
          style={{
            backgroundColor: page === 1 ? "white" : "buttonface",
          }}
          onClick={() => navigatePage(1)}
        >
          1
        </button>
      )}
      {totalPages >= 2 && page < totalPages && (
        <button
          style={{
            backgroundColor: page > 1 ? "white" : "buttonface",
          }}
          onClick={() => navigatePage(page > 1 ? page : 2)}
        >
          {page > 1 ? page : 2}
        </button>
      )}
      {totalPages >= 3 && (
        <button
          style={{
            backgroundColor: page === totalPages ? "white" : "buttonface",
          }}
          onClick={() => navigatePage(totalPages)}
        >
          {data.totalPages}
        </button>
      )}
      <button onClick={nextPage}>{">"}</button>
    </div>
  );
};

export default Pagination;
