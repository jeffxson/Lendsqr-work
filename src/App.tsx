import "../src/styles/styles.scss";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import Login from "./pages/login";
import UserDetails from "./pages/userDetails";
import Dashboard from "./pages/dashboard";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/user-details/:id" element={<UserDetails />}></Route>
      </Routes>
    </div>
  );
}

export default App;
