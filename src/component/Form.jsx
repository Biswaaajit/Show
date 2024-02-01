/* eslint-disable react/prop-types */
import { useSearchParams } from "react-router-dom";
import styles from "./Form.module.css";
function Form({ setStatus }) {
  const [userDetail] = useSearchParams();
  const name = userDetail.get("name");
  const email = userDetail.get("email");
  const formData = localStorage.getItem("watch");
  const show = JSON.parse(formData);
  console.log(show);
  function handleSubmit(e) {
    e.preventDefault();
    setStatus("confirm");
  }

  return (
    <div>
      <form className={styles.cover}>
        <p className={styles.heading}>Booking Tickets</p>
        <div className={styles.label}>
          <label>Your Name</label>
          <input value={name} disabled />
        </div>
        <div className={styles.label}>
          <label>Email</label>
          <input value={email} disabled />
        </div>
        <div className={styles.info}>
          <p>
            Movie Name: <span>{show.show.name}</span>
          </p>
        </div>
        <div className={styles.info}>
          <p>
            Timing Details:
            <span>
              {show.show.schedule.days} show at {show.show.schedule.time}
            </span>
          </p>
        </div>
        <button onClick={handleSubmit}>Confirm Your Ticket</button>
      </form>
    </div>
  );
}

export default Form;
