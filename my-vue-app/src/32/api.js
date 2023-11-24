import axios from "axios";
const quoteApi = axios.create({
  baseURL: "https://api.quotable.io",
});

export const getQuote = async (query, perPage) => {
  let url = "/search/quotes";
  url += "?query=" + query;
  url += "&limit=" + perPage;

  return quoteApi.get(url);
};

export const navigatePage = async (searchQ, toNextPage, limit) => {
  let url = "/search/quotes";
  url += "?query=" + searchQ;
  url += "&page=" + toNextPage;
  url += "&limit=" + limit;

  return quoteApi.get(url);
};


