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
import { useLocation, useSearchParams } from "react-router-dom";
import { DataContext } from "../../context/DataProvider";

const Image = styled("img")`
  width: 100%;
  height: 50vh;
  objectfit: cover;
`;
const CreatePost = () => {
  const Blog_post = {
    title: "",
    description: "",
    picture: "",
    username: "",
    category: "",
    createDate: new Date(),
  };

  const [post, setPost] = useState(Blog_post);
  const [file, setFile] = useState("");
   const location = useLocation();
  const {saveData} = useContext(DataContext);
  useEffect(() => {
    const getImage = () => {
      if (file) {
        const data = new FormData();
        data.append("name", file.name);
        data.append("file", file);
      }
    };
    getImage();
    post.category = location.search?.split("=")[1] || "All"; 
    post.username = saveData.username
  }, [file]);

 
  const url =
    "https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80";

  const catchPost = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
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
          name="title"
        />
        <Button variant="container" style={{ backgroundColor: "lightcoral" }}>
          Publish
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
        placeholder="Write your story"
        onChange={(e) => catchPost(e)}
        name="description"
      ></TextareaAutosize>
    </Box>
  );
};

export default CreatePost;
