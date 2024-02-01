/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import styles from "./Rightside.module.css";
const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));
function Rightside({ currentId, setStatus }) {
  const [currentShow, setCurrentShow] = useState([]);
  useEffect(function () {
    async function getCurrentShow() {
      const res = await fetch("https://api.tvmaze.com/search/shows?q=all");
      const data = await res.json();
      setCurrentShow(data);
    }
    getCurrentShow();
  }, []);
  const current = currentShow.filter((show) => show.show.id === currentId);

  return (
    <div className={styles.cover}>
      {current.at(0) && (
        <Showing current={current.at(0)} setStatus={setStatus} />
      )}
    </div>
  );
}
function Showing({ current, setStatus }) {
  console.log(current);
  const { show } = current;
  console.log(show);
  function handleStatus() {
    setStatus("form");
    localStorage.setItem("watch", JSON.stringify({ show }));
  }
  return (
    <div className={styles.show}>
      <div className={styles.info}>
        <img src={show.image?.original || "/NoImage.jpg"} />
        <div className={styles.showInfo}>
          <p className={styles.title}>{show.name}</p>
          <p>
            Genres:{" "}
            {show.genres.map((genre) => (
              <span key={genre}>{genre}, </span>
            ))}
          </p>
          <p>Average Time: {show.averageRuntime} min</p>
          <p>Rating: 🌟{show.rating?.average || "No Rating"}</p>
          <p>Released in: {formatDate(show.premiered)} </p>
        </div>
      </div>

      <p className={styles.summary}>{show.summary}</p>
      <button className={styles.btn} onClick={handleStatus}>
        Book Your Show Now
      </button>
    </div>
  );
}
export default Rightside;
