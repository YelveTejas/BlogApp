import logo from "./logo.svg";
import "./App.css";
import Login from "./components/Login";
import DataProvider from "./context/DataProvider";
import Home from "./components/Home/Home";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import Header from "./components/Home/Header";
import { useState } from "react";
import CreatePost from "./components/Home/CreatePost";
import Details from "./components/Home/Details";
import Update from "./components/Home/Update";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import About from "./components/Home/About";
import Contact from "./components/Home/Contact";

const PrivateRoute = ({ authenticate, ...props }) => {
  return authenticate ? (
    <>
      <Header  />
      <Outlet />
    </>
  ) : (
    <Navigate replace to="/login"></Navigate>
  );
};
function App() {
  const [authenticate, setAuthenticate] = useState(false);
  return (
    <>
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
          <Route
            path="/details/:id"
            element={<PrivateRoute authenticate={authenticate} />}
          >
            <Route path="/details/:id" element={<Details />}></Route>
          </Route>
          <Route
            path="/update/:id"
            element={<PrivateRoute authenticate={authenticate} />}
          >
            <Route path="/update/:id" element={<Update />}></Route>
          </Route>
          <Route
            path="/about"
            element={<PrivateRoute authenticate={authenticate} />}
          >
            <Route path="/about" element={<About />}></Route>
          </Route>
          <Route
            path="/contact"
            element={<PrivateRoute authenticate={authenticate} />}
          >
            <Route path="/contact" element={<Contact />}></Route>
          </Route>
        </Routes>
      </div>
    </DataProvider>
    <ToastContainer position="top-center" autoClose={4000} closeOnClick={true} />
    </>
  );
}

export default App;
