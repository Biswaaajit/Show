import Leftside from "./Leftside";
import styles from "./Movie.module.css";
import Rightside from "./Rightside";
import { useState } from "react";
import Form from "./Form";
function Movie() {
  const [status, setStatus] = useState("");
  const [currentId, setCurrentId] = useState("");

  return (
    <div>
      {status === "confirm" && (
        <h1 className={styles.heading}>
          Ticket is Booked. Donot be late for the show.
        </h1>
      )}
      <div className={styles.content}>
        <Leftside
          setCurrentId={setCurrentId}
          setStatus={setStatus}
          status={status}
        />
        {status === "right" && (
          <Rightside currentId={currentId} setStatus={setStatus} />
        )}
        {status === "form" && <Form setStatus={setStatus} />}
      </div>
    </div>
  );
}

export default Movie;
