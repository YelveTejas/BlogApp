import { Box, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { CommentTwoTone, Delete } from '@mui/icons-material'
import { useContext } from 'react'
import { DataContext } from '../../../context/DataProvider'
import styled from '@emotion/styled'
import axios from 'axios'
const Name = styled(Typography)`
    font-weight: 600,
    font-size: 18px;
    margin-right: 20px;
`;
const Component = styled(Box)`
    margin-top: 30px;
    background: #F5F5F5;
    padding: 10px;
`;
const Container = styled(Box)`
    display: flex;
    margin-bottom: 5px;
`;
const StyledDate = styled(Typography)`
    font-size: 14px;
    color: #878787;
`;
const DeleteIcon = styled(Delete)`
    margin-left: auto;
    
`;

const Showcomments = ({comment,setToggle}) => {
    const {saveData} = useContext(DataContext)
    const accessToken = sessionStorage.getItem('accesstoken').split(' ')

    const headers = {
      'Content-Type': 'application/json',
      Authorization: accessToken[1],
    }

    const deletecomment=()=>{
        
        axios.delete(`https://blogapp-2.onrender.com/deletecomment/${comment._id}`,{headers})
        .then((res)=>{
           
            if(res.status==200){
                setToggle((prev)=>!prev)
            }
        }).catch((err)=>{
            console.log(err)
        })
    }
  
  return (
    <Component>
        <Container>
             <Name>{comment.name}</Name>
             <StyledDate>{new Date(comment.date).toDateString()}</StyledDate>
             {
                comment.name === saveData.name &&
                
                <DeleteIcon color='red' onClick={()=>deletecomment()}/>
                
             }
        </Container>
        <Box>
            <Typography>{comment.comments}</Typography>
        </Box>
    </Component>
  )
}

export default Showcomments