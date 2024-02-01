import { useState } from "react";
import styles from "./Login.module.css";
import { useNavigate } from "react-router-dom";

function Login() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [entry, setEntry] = useState(false);
  const navigate = useNavigate();
  function handleLogin(e) {
    e.preventDefault();
    if (!name && !email) {
      setEntry(true);
    } else {
      navigate(`movie?name=${name}&email=${email}`);
    }
  }
  return (
    <div className={styles.cover}>
      <h1 className={styles.heading}>Welcome to this Site</h1>
      <form className={styles.form}>
        <div>
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={entry && styles.error}
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={entry && styles.error}
          />
        </div>

        <button onClick={handleLogin}>Login</button>
      </form>
    </div>
  );
}

export default Login;
