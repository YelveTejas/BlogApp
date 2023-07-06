import styled from "@emotion/styled";
import { Box, Button, TextareaAutosize } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "../../../context/DataProvider";
import axios from "axios";
import Showcomments from "./Showcomments";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Container = styled(Box)`
  margin-top: 100px;
  display: flex;
`;
const Image = styled("img")({
  width: 50,
  height: 50,
  borderRadius: "50%",
});
const TextArea = styled(TextareaAutosize)`
  height: 100px;
  width: 100%;
  margin: 0 20px;
`;

const initial = {
  name: "",
  postid: "",
  comments: "",
  date: new Date(),
};
const Comments = ({ post }) => {
  const { saveData } = useContext(DataContext);
  const [getcomments, setGetcomments] = useState([]);
  const [toggle, setToggle] = useState(false);
  const [comment, setComment] = useState(initial);
  const url = "https://static.thenounproject.com/png/12017-200.png";
  const accessToken = sessionStorage.getItem('accesstoken').split(' ')

  const headers = {
    'Content-Type': 'application/json',
    Authorization: accessToken[1],
  }
  useEffect(() => {
    axios.get(`https://blogapp-2.onrender.com/comment/${post._id}`,{headers}).then((res) => {
      setGetcomments(res.data);
    });
  }, [post, toggle]);
  
  const handleChange = (e) => {
    setComment({
      ...comment,
      name: saveData.name,
      postid: post._id,
      comments: e.target.value,
    });
  };
  const addcomment = (e) => {
    axios.post("https://blogapp-2.onrender.com/comment", comment,{headers}).then((res) => {
      console.log(res)
      if (res.status == 200) {
        toast.success('Comment posted successfully')
        setToggle((prev) => !prev);
      }
    }).catch((err)=>{
      toast.error('Error while posting comment')
    });
  };
  return (
    <Box>
      <Container>
        <Image src={url} alt="tejas" />
        <TextArea
          minRows={3}
          value={comment.comments}
          onChange={(e) => handleChange(e)}
          placeholder="Share Your thougts..."
        ></TextArea>
        <Button
          onClick={(e) => addcomment(e)}
          variant="contained"
          color="primary"
          size="medium"
          style={{ height: "40px" }}
        >
          POST
        </Button>
      </Container>
      <Box>
        {getcomments.length > 0 &&
          getcomments.map((e) => <Showcomments comment={e} setToggle={setToggle} />)}
      </Box>
    </Box>
  );
};

export default Comments;