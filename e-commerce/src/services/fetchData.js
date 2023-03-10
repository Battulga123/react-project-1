import axios from "axios";

async function fetchPopularCategory(url, setPopularCategory) {
  const result = await axios.get(url);
  setPopularCategory(result.data);
  return result
}

async function fetchProducts(url, setProdcut) {
  const result = await axios.get(url);
  setProdcut(result.data);
  return result
}


export { fetchPopularCategory, fetchProducts };
