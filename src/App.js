import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./App.css";
import AuthorizedCom from "./containers/AuthorizedCom";
import UnAuthorizedCom from "./containers/UnAuthorizedCom";
import Login from "./containers/Login/Login";
import DataAnalysis from "./containers/DataAnalysis/DataAnalysis";

function PrivateRoute({ element, ...rest }) {
  const isAuthenticated = !!localStorage.getItem("token");

  return isAuthenticated ? (
    <Route {...rest} element={element} />
  ) : (
    <Navigate to="/login" />
  );
}

function App() {
  return (
    <div className="w-full bg-lightpink">
      {/* <Routes>
        <Route element={<PrivateRoute />}>
          <Route path="/" element={<DataAnalysis />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes> */}
      {/* <UnAuthorizedCom /> */}
      <AuthorizedCom />
    </div>
  );
}

export default App;
