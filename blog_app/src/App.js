import logo from "./logo.svg";
import "./App.css";
import Login from "./components/Login";
import DataProvider from "./context/DataProvider";
import Home from "./components/Home/Home";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import Header from "./components/Home/Header";
import { useState } from "react";
import CreatePost from "./components/Home/CreatePost";

const PrivateRoute = ({ authenticate, ...props }) => {
  return authenticate ? (
    <>
      <Header />
      <Outlet />
    </>
  ) : (
    <Navigate replace to="/login"></Navigate>
  );
};
function App() {
  const [authenticate, setAuthenticate] = useState(false);
  return (
    <DataProvider>
      <div style={{ marginTop: 64 }}>
        <Routes>
          <Route
            path="/login"
            element={<Login setAuthenticate={setAuthenticate} />}
          ></Route>
          <Route
            path="/"
            element={<PrivateRoute authenticate={authenticate} />}
          >
            <Route path="/" element={<Home />}></Route>
          </Route>
          <Route
            path="/create"
            element={<PrivateRoute authenticate={authenticate} />}
          >
            <Route path="/create" element={<CreatePost />}></Route>
          </Route>
        </Routes>
      </div>
    </DataProvider>
  );
}

export default App;
