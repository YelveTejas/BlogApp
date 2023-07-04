import axios from "axios";
import React, { useEffect, useState } from "react";
import Showposts from "./Showposts";
import { Box, Grid } from "@mui/material";
import { Link, useSearchParams } from "react-router-dom";
const Post = () => {
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");
  const accessToken = sessionStorage.getItem("accesstoken").split(" ");
  console.log(accessToken)
  const headers = {
    "Content-Type": "application/json",
    Authorization: accessToken[1],
  };
  const [post, setPost] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:4400/getpost`, {
          params: { category: category },
          headers // Pass the category parameter as a query parameter
        },);
        setPost(response.data);
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
        <Box style={{ color: "#878787", margin: "30px 80px", fontSize: 18 }}>
          No Data to Display
        </Box>
      )}
    </>
  );
};

export default Post;
