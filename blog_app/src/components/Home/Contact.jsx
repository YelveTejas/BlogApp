
import { Box, styled, Typography, Link } from '@mui/material';
import { GitHub, Instagram, Email,LinkedIn } from '@mui/icons-material';

const Banner = styled(Box)`
    background-image: url(http://mrtaba.ir/image/bg2.jpg);
    width: 100%;
    height: 50vh;
    background-position: left 0px top -100px;
    background-size: cover;
`;

const Wrapper = styled(Box)`
    padding: 20px;
    & > h3, & > h5 {
        margin-top: 50px;
    }
`;

const Text = styled(Typography)`
    color: #878787;
`;


const Contact = () => {
    return (
        <Box>
            <Banner />
            <Wrapper>
                <Typography variant="h3">Getting in touch is easy!</Typography>    
                <Text variant="h5">
                    Reach out to me on
                    <Link href="https://github.com/YelveTejas" color="inherit" target="_blank">
                        <Instagram/>
                    </Link>
                    or Connet with me on Linked In
                    <Link href="https://www.linkedin.com/in/tejas-yelve/" target="_blank" color="inherit">
                        <LinkedIn />
                    </Link>
                </Text>
            </Wrapper>
        </Box>
    );
}

export default Contact;