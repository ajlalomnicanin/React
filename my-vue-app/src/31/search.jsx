import React, { useState } from "react";

function Search() {
  const [data, setData] = useState({});
  const [quotes, setQuotes] = useState("");
  const getQuote = async () => {
    try {
      let apiURL = "https://api.quotable.io/search/quotes";

      if (quotes !== "" && quotes !== "0") {
        apiURL += "?query=" + quotes;
      }

      const response = await fetch(apiURL);
      const responseData = await response.json();

      setData(responseData);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(data);
  return (
    <div>
      <input
        type="text"
        name="quotes"
        value={quotes}
        onChange={(e) => setQuotes(e.target.value)}
        placeholder="quotes"
      />
      <button onClick={getQuote}>Get quote</button>

      <div>
        {data && data.results?.length === 0 && <p>No quotes found</p>}
        {data?.results?.map((quote) => {
          return (
            <div
              key={quote._id}
              style={{
                border: "1px solid black",
                padding: 10,
                marginBottom: 10,
              }}
            >
              <p>{quote.author}</p>
              <p>{quote.content}</p>
            </div>
          );
        })}
      </div>
      <div style={{ padding: "15px" }}>
        <button style={{ borderRadius: "50%" }}>{"<"}</button>
        <button
          style={{
            borderRadius: "50%",
            backgroundColor:
              data?.results?.length === 1 ? "white" : "buttonface",
          }}
        >
          1
        </button>
        <button style={{ borderRadius: "50%" }}>2</button>
        <button style={{ borderRadius: "50%" }}>3</button>
        <button style={{ borderRadius: "50%" }}>4</button>
        <button style={{ borderRadius: "50%" }}>{">"}</button>
      </div>
    </div>
  );
}

export default Search;
// rfce
