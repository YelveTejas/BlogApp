import axios from "axios";
import React, { useEffect, useState } from "react";
import Showposts from "./Showposts";
import { Box, Grid } from "@mui/material";
import { Link, useSearchParams } from "react-router-dom";
import CircularProgress from '@mui/material/CircularProgress';
const Post = () => {
  const [searchParams] = useSearchParams();
  const [loading,setLoading] = useState(false)
  const category = searchParams.get("category");
  const accessToken = sessionStorage.getItem("accesstoken").split(" ");
 
  const headers = {
    "Content-Type": "application/json",
    Authorization: accessToken[1],
  };
  const [post, setPost] = useState([]);
  useEffect(() => {
    setLoading(true)
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://blogapp-2.onrender.com/getpost`, {
          params: { category: category },
          headers // Pass the category parameter as a query parameter
        },);
        setPost(response.data);
        setLoading(false)
        // console.log(response.data, "response");
      } catch (error) {
        console.error("Error while fetching data:", error);
      }
    };

    fetchData();
  }, [category]);
  return (
    <>
    
      {post && post.length > 0 ? (
        post.map((e, i) => 
        <Grid item lg={3} sm={4} xs={12}>
          <Link to={`details/${e._id}`} style={{textDecoration:'none',color:"inherit"}} >
        <Showposts key={e._id} posts={e} />
        </Link>
        </Grid>
        )
      ) : (
        <Box style={{ color: "#878787", margin: "30px 80px", fontSize: 18 ,width:'7cm',margin:"auto"}}>
          {loading ? <CircularProgress size={40} color="success"/>  : ''}
        </Box>
      )}
    </>
  );
};

export default Post;
