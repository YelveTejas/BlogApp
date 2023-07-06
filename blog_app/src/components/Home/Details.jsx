import styled from "@emotion/styled";
import { Box, Container, LinearProgress, Typography } from "@mui/material";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Delete, Edit } from '@mui/icons-material';
import { DataContext } from "../../context/DataProvider";
import Comments from "./Comments/Comments";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Details = () => {
  const [loading,setLoading] = useState(false)
  const [post, setPost] = useState({});
  const { id } = useParams();
  const navigate = useNavigate()
  const Container = styled(Box)`
  margin: 50px 100px
  `

  const Image = styled('img')({
    margin:'10px',
    width:'100%',
    height:'50vh',
    objectFit:'cover'
  })
  const Heading = styled(Typography)`
    font-size: 38px;
    font-weight: 600;
    text-align: center;
    margin: 50px 0 10px 0;
`;
const EditIcon = styled(Edit)`
    margin: 5px;
    padding: 5px;
    border: 1px solid #878787;
    border-radius: 10px;
`;
const DeleteIcon = styled(Delete)`
    margin: 5px;
    padding: 5px;
    border: 1px solid #878787;
    border-radius: 10px;
`;
const {saveData} = useContext(DataContext)
const accessToken = sessionStorage.getItem('accesstoken').split(' ')

  const headers = {
    'Content-Type': 'application/json',
    Authorization: accessToken[1],
  }
  const url =
    "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmxvZyUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60";
  useEffect(() => {
    setLoading(true)
    axios.get(`https://blogapp-2.onrender.com/details/${id}`,{headers}).then((res) => {
      setPost(res.data);
       setLoading(false)
    });
  }, []);
  
const deleteblog=()=>{
 axios.delete(`https://blogapp-2.onrender.com/delete/${post._id}`,{headers})
 .then((res)=>{
  if(res.status==200){
    toast.success('Post Deleted Successfully')
    navigate('/')

  }
 })
}
  return (
    <Container>
      <Image src={url} alt="tejas" />
      <Box>
        {
          loading ?<LinearProgress /> : ''
        }
      </Box>
      <Box style={{float:'right'}}>
        {
            saveData.username ==  post.username &&
            <>
            <Link to={`/update/${post._id}`}>
             <EditIcon color='primary'/>
             </Link>
             <DeleteIcon onClick={()=>deleteblog()} color="error"/>
            </>
        }
      </Box>
      <Heading>{post.title}</Heading>
      <Box style={{display:'flex'}}>
      <Typography>Author:<Box component='span' style={{fontWeight:600}}>{post.username}</Box></Typography>
      <Typography  style={{marginLeft: 'auto'}}>{new Date (post.createDate).toDateString()}</Typography>
      </Box>
      <Typography>{post.description}</Typography>
      <Comments post={post}/>
    </Container>
  );
};

export default Details;
