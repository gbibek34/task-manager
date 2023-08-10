import "react-toastify/dist/ReactToastify.css";
import './index.css';
import './form.css'

import axios from "axios";
import { Fragment, useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Login from "./pages/Login";
import Register from "./pages/Registration";
import Sidebar from "./components/Sidebar";
import Rightbar from "./components/Rightbar";
import Dashboard from "./pages/Dashboard";
import Upcoming from "./pages/Upcoming";
import Important from "./pages/Important";
import Completed from "./pages/Completed";

function App() {
  const [user, setUser] = useState();
  const [token, setToken] = useState();
  const [profile, setProfile] = useState();
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    setToken(localStorage.getItem("token"));
  }, []);

  useEffect(() => {
    if (token) {
      const getUser = async () => {
        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
        const res = await axios.get(`/users/profile`, config);
        setUser(res["data"]["id"]);
        setProfile(res["data"])
      };
      getUser();
    }
  }, [token]);

  useEffect(() => {
    if (user) {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const getTasks = async () => {
        const res = await axios.get(`/tasks/user/${user}`, config);
        setTasks(res["data"]);
      };
      getTasks();
    }
  }, [token, user]);

  return (
    <>
      <Router>
        <div className="main-container">
          {token ? <Sidebar profile={profile} /> : <div className="sidebar" />}
          <div className="content">
            <Routes>
              <Route path="/" element={token ? <Dashboard tasks={tasks} /> : <Login />} />
              <Route path="/login" element={token ? <Dashboard /> : <Login />} />
              <Route path="/register" element={token ? <Dashboard /> : <Register />} />
              <Route path="/upcoming" element={token ? <Upcoming tasks={tasks} /> : <Login />} />
              <Route path="/important" element={token ? <Important tasks={tasks} /> : <Login />} />
              <Route path="/completed" element={token ? <Completed tasks={tasks} /> : <Login />} />
            </Routes>
          </div>
          {token ? <Rightbar token={token} user={user} tasks={tasks} /> : <div className="rightbar" />}
        </div>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
