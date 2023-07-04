import styled from '@emotion/styled'
import { Box, Typography } from '@mui/material'
import React from 'react'


const Showposts = ({posts}) => {

const Container = styled(Box)`
border: 1px solid #d3cede;
border-radius: 10px;
margin: 10px;
display: flex;
align-items: center;
flex-direction: column;
padding:10px;
height: 350px;
& > img, & > p {
    padding: 0 5px 5px 5px;
}
`
const Image = styled('img')({
    width: '100%',
    objectFit: 'cover',
    borderRadius: '10px 10px 0 0',
    height: 150
});

const addElipsis = (str,limit)=>{
    return str.length >limit ? str.substring(0,limit)+'...': str;
}
const url ='https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGJsb2clMjBiYWNrZ3JvdW5kfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
  return (
    <Container>
        <Image src={url} alt='tejas'></Image>
        <Typography>{addElipsis(posts.title,20)}</Typography>
        <Typography>{`Category-${posts.category}`}</Typography>
        <Typography>{`Author - ${posts.username}`}</Typography>
        <Typography>{addElipsis(posts.description,20)}</Typography>
    </Container>
  )
}

export default Showposts