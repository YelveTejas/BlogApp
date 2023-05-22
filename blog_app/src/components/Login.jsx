import React, { useState } from "react";
import { Box, Button, TextField, Typography, styled } from "@mui/material";
import axios from "axios";
const Component = styled(Box)`
  width: 400px;
  margin: auto;
  margin-top: 30px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;
const Image = styled("img")({
  width: 100,
  margin: "auto",
  display: "flex",
  padding: "5px",
});
const Wrapper = styled(Box)`
  padding: 25px 35px;

  display: flex;
  flex: 1;
  flex-direction: column;
  & > div,
  & > button {
    margin-top: 20px;
  }
`;
const Login = () => {
  const signupdata = {
    name: "",
    username: "",
    password: "",
  };
  const logindata = {
    username: "",
    password: "",
  };
  const [data, setData] = useState(signupdata);
  const [loginData, setLoginData] = useState(logindata);
  const [account, setAccount] = useState("login");
  const imageURL =
    "https://www.sesta.it/wp-content/uploads/2021/03/logo-blog-sesta-trasparente.png";

  const toggle = () => {
    account === "signup" ? setAccount("login") : setAccount("signup");
  };

  const inputchange = (e) => {
    // console.log(e.target.name);
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const login = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };
  console.log(loginData);
  const signup = () => {
    axios
      .post("http://localhost:4400/signup", data)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log("error", err);
      });
  };

  const checklogin = () => {
    axios
      .post("http://localhost:4400/login", loginData)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <Component>
      <Box>
        <Image src={imageURL} alt="login"></Image>
        {account === "login" ? (
          <Wrapper>
            <TextField
              name="username"
              onChange={(e) => login(e)}
              placeholder="Email"
              variant="standard"
            ></TextField>
            <TextField
              name="password"
              onChange={(e) => login(e)}
              placeholder="password"
              variant="standard"
            ></TextField>
            <Button
              variant="contained"
              style={{ backgroundColor: "#FB641B" }}
              onClick={() => checklogin()}
            >
              Login
            </Button>
            <Typography style={{ textAlign: "center", marginTop: "5px" }}>
              OR
            </Typography>
            <Button
              variant="contained"
              style={{ backgroundColor: "#FB641B" }}
              onClick={() => toggle()}
            >
              Create Account
            </Button>
          </Wrapper>
        ) : (
          <Wrapper>
            <TextField
              name="name"
              placeholder="Enter Name"
              onChange={(e) => inputchange(e)}
              variant="standard"
            ></TextField>
            <TextField
              name="username"
              placeholder="Email"
              variant="standard"
              onChange={(e) => inputchange(e)}
            ></TextField>
            <TextField
              name="password"
              placeholder="password"
              variant="standard"
              onChange={(e) => inputchange(e)}
            ></TextField>
            <Button
              variant="contained"
              style={{ backgroundColor: "#FB641B" }}
              onClick={() => signup()}
            >
              SignUP
            </Button>
            <Typography style={{ textAlign: "center", marginTop: "5px" }}>
              OR
            </Typography>
            <Button
              variant="contained"
              style={{ backgroundColor: "#FB641B" }}
              onClick={() => toggle()}
            >
              Already have an account
            </Button>
          </Wrapper>
        )}
      </Box>
    </Component>
  );
};

export default Login;
