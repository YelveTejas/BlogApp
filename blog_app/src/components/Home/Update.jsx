import styled from "@emotion/styled";
import {
  Box,
  Button,
  FormControl,
  InputBase,
  TextareaAutosize,
} from "@mui/material";
import React, { useContext, useState } from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { useEffect } from "react";
import {
  useLocation,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
import { DataContext } from "../../context/DataProvider";
import axios from "axios";
const Image = styled("img")`
  width: 100%;
  height: 50vh;
  objectfit: cover;
`;
const Update = () => {
  const { id } = useParams();
  const Blog_post = {
    title: "",
    description: "",
    username: "",
    category: "",
    createDate: new Date(),
  };

  const [post, setPost] = useState(Blog_post);
  const [updatepost, setUpdatepost] = useState("");
  const [file, setFile] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const { saveData } = useContext(DataContext);

  useEffect(() => {
    axios.get(`http://localhost:4400/details/${id}`).then((res) => {
      setPost(res.data);
    });
  }, []);

  useEffect(() => {
    const getImage = () => {
      // if (file) {
      //   const data = new FormData();
      //   data.append("name", file.name);
      //   data.append("file", file);
      //   axios.post('http://localhost:4400/file/upload',data)
      //   .then((res)=>{
      //     console.log(res.data,'res')
      //     post.picture = res.data
      //   })
      // }
    };
    getImage();
    post.category = location.search?.split("=")[1] || "All";
    post.username = saveData.username;
  }, [file]);

  const url = post.picture
    ? post.picture
    : "https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80";

  const catchPost = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };
  const accessToken = sessionStorage.getItem("accesstoken").split(" ");

  const headers = {
    "Content-Type": "application/json",
    Authorization: accessToken[1],
  };
  const uploadPost = () => {
    axios
      .put(`http://localhost:4400/update/${id}`, post, { headers })
      .then((res) => {
        console.log(res, "updated Data");
        if (res.status == 200) {
          alert("Post Updated Successfully");
          navigate(`/details/${id}`)
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Box style={{ margin: "40px" }}>
      <Image src={url} alt="banner" />
      <FormControl
        style={{ marginTop: "10px", display: "flex", flexDirection: "row" }}
      >
        <label htmlFor="fileinput">
          <AddCircleIcon fontSize="large" color="blue" />
        </label>
        <input
          type="file"
          id="fileinput"
          style={{ display: "none" }}
          onChange={(e) => setFile(e.target.files[0])}
        />
        <InputBase
          style={{ flex: "1", margin: "0px 30px", fontSize: "25px" }}
          placeholder="Title"
          onChange={(e) => catchPost(e)}
          value={post.title}
          name="title"
        />
        <Button
          variant="container"
          style={{ backgroundColor: "lightcoral" }}
          onClick={() => uploadPost()}
        >
          Update
        </Button>
      </FormControl>
      <TextareaAutosize
        style={{
          width: "100%",
          marginTop: "15px",
          fontSize: "18px",
          border: "none",
          outline: "none",
        }}
        minRows={5}
        value={post.description}
        placeholder="Write your story"
        onChange={(e) => catchPost(e)}
        name="description"
      ></TextareaAutosize>
    </Box>
  );
};

export default Update;
