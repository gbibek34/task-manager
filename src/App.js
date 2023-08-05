import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import DatePicker from "./pages/DatePicker";
import Profile from "./pages/Profile";

function App() {
  return (
    <>
      <Router>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <Sidebar />
          <div className="container">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/calendar" element={<DatePicker />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </div>
        </div>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
