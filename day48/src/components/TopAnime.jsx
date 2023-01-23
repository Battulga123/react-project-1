import { useEffect } from "react";
import { useState } from "react";

export default function TopAnime() {
  const [animes, setAmimes] = useState([]);
  const [page, setPage] = useState(1);
  const URL = `https://api.jikan.moe/v4/top/anime?page=${page}`;
  useEffect(() => {
    callData();
  }, [page]);

  async function callData() {
    const JSONData = await fetch(URL);
    const ResultData = await JSONData.json();
    setAmimes(ResultData.data);
    console.log(ResultData.data);
    console.log(animes);
  }

  return (
    <div>
      <h1>Day48-Top Anime</h1>
      {animes &&
        animes.map((anime) => {
          return <h6>{anime.title}</h6>;
        })}
      <button onClick={callData}>Fetch Anime Data</button>
      <button onClick={() => setPage(page + 1)}>Next page</button>
    </div>
  );
}
