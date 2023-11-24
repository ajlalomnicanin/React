import { useState } from "react";
import Pagination from "./Pagination";

// paginacija postoji samo ako je reusult array veci od nule
// prvo i drugo dugme rade samo ako je broj quotova veci od 1

const Class26 = () => {
  const [data, setData] = useState({});
  const [searchQ, setSearchQ] = useState("");
  const [limit, setLimit] = useState(20);

  const getQuote = async () => {
    if (searchQ === 0) {
      return;
    }
    try {
      let apiURL = "https://api.quotable.io/search/quotes";

      apiURL += "?query=" + searchQ;
      apiURL += "&limit=" + limit;

      const response = await fetch(apiURL);
      const responseData = await response.json();

      setData(responseData);
    } catch (error) {
      console.log(error);
    }
  };

  const nextPage = async () => {
    if (searchQ === 0) {
      return;
    }
    try {
      if (data.page === data.totalPages) {
        return;
      }

      let apiURL = "https://api.quotable.io/search/quotes";

      const toNextPage = data?.page + 1;

      apiURL += "?query=" + searchQ;
      apiURL += "&page=" + toNextPage;
      apiURL += "&limit=" + limit;

      const response = await fetch(apiURL);
      const responseData = await response.json();

      setData(responseData);
    } catch (error) {
      console.log(error);
    }
  };

  const previousPage = async () => {
    if (searchQ === 0) {
      return;
    }
    try {
      if (data.page === 1) {
        return;
      }

      let apiURL = "https://api.quotable.io/search/quotes";

      const toNextPage = data?.page - 1;

      apiURL += "?query=" + searchQ;
      apiURL += "&page=" + toNextPage;
      apiURL += "&limit=" + limit;

      const response = await fetch(apiURL);
      const responseData = await response.json();

      setData(responseData);
    } catch (error) {
      console.log(error);
    }
  };

  const navigatePage = async (page) => {
    if (searchQ === 0) {
      return;
    }
    try {
      if (data.page === page) {
        return;
      }

      let apiURL = "https://api.quotable.io/search/quotes";

      const toNextPage = page;

      apiURL += "?query=" + searchQ;
      apiURL += "&page=" + toNextPage;
      apiURL += "&limit=" + limit;

      const response = await fetch(apiURL);
      const responseData = await response.json();

      setData(responseData);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <input
        value={searchQ}
        type="text"
        onChange={(e) => setSearchQ(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            console.log(e.key);
            getQuote();
          }
          if (e.key === "Escape") {
            // getQuote("");
            // setData({});
          }
        }}
      />{" "}
      <button onClick={getQuote}>Get quote</button>
      <p>quotes per page</p>
      <input
        type="number"
        placeholder="quotes per page"
        value={limit}
        onChange={(e) => setLimit(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            console.log(e.key);
            getQuote();
          }
        }}
      />
      <div>
        {data && data.results?.length === 0 && <p>No quotes found</p>}
        {data?.results?.map((quote) => {
          return (
            <div
              key={quote._id}
              style={{
                border: "1px black solid",
                padding: 10,
                marginBottom: 10,
                borderRadius: 4,
              }}
            >
              <p>{quote.author}</p>
              <p>{quote.content}</p>
            </div>
          );
        })}
        <Pagination
          page={data.page}
          totalPages={data.totalPages}
          previousPage={() => {
            previousPage;
          }}
          nextPage={() => {
            nextPage;
          }}
          navigatePage={() => {
            navigatePage;
          }}
        />
      </div>
    </div>
  );
};
export default Class26;
// rfce
