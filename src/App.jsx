import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./component/Login";
import "./index.css";
import Movie from "./component/Movie";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="movie" element={<Movie />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
