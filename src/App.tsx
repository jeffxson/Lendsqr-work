import "../src/styles/styles.scss";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import Login from "./pages/login";
import Dashboard from "./pages/dashboard";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
      </Routes>
    </div>
  );
}

export default App;
