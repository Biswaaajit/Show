/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import styles from "./Leftside.module.css";
function Leftside({ setCurrentId, setStatus, status }) {
  const [shows, setShows] = useState([]);
  useEffect(function () {
    async function getList() {
      const res = await fetch("https://api.tvmaze.com/search/shows?q=all");
      const data = await res.json();

      setShows(data);
    }
    getList();
  }, []);
  return (
    <div className={status ? styles.left : styles.lefty}>
      {shows.map((show) => (
        <ShowList
          show={show.show}
          key={show.show.id}
          setCurrentId={setCurrentId}
          setStatus={setStatus}
        />
      ))}
    </div>
  );
}
function ShowList({ show, setCurrentId, setStatus }) {
  function handleSelect() {
    setCurrentId(show.id);
    setStatus("right");
  }
  return (
    <div className={styles.list}>
      <img src={show.image?.medium || "/NoImage.jpg"} />
      <div>
        <p className={styles.title}>{show.name}</p>
        <p className={styles.rating}>
          Rating <span>⭐{show.rating?.average || "NaN"}</span>
        </p>
        <button className={styles.btn} onClick={handleSelect}>
          More Details→
        </button>
      </div>
    </div>
  );
}

export default Leftside;
