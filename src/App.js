import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Navigation from "./components/Navigation";
import "bootstrap/dist/css/bootstrap.min.css";
import AllUsers from "./components/AllUsers";

import Login from "./components/LogIn";
import AllClubs from "./components/AllClubs";
import WaitingClubs from "./components/WaitingClubs";
import UserReviews from "./components/UserReviews";
import ManageBookings from "./components/ManageBookings";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Dashboard" element={<Navigation />}>
          <Route path="/Dashboard/AllUsers" element={<AllUsers />} />
          <Route path="/Dashboard/AllClubs" element={<AllClubs />} />
          <Route path="/Dashboard/WaitingClubs" element={<WaitingClubs />} />
          <Route path="/Dashboard/AllFeedbacks" element={<UserReviews />} />
          <Route
            path="/Dashboard/ManageBookings"
            element={<ManageBookings />}
          />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
