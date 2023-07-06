import { Box, styled, Typography, Link } from "@mui/material";
import { GitHub, Instagram, Email } from "@mui/icons-material";

const Banner = styled(Box)`
  background-image: url(https://www.wallpapertip.com/wmimgs/23-236943_us-wallpaper-for-website.jpg);
  width: 100%;
  height: 50vh;
  background-position: left 0px bottom 0px;
  background-size: cover;
`;

const Wrapper = styled(Box)`
  padding: 20px;
  & > h3,
  & > h5 {
    margin-top: 50px;
  }
`;

const Text = styled(Typography)`
  color: #878787;
`;

const About = () => {
  return (
    <Box>
      <Banner />
      <Wrapper>
        <Typography variant="h3">Tejas Yelve</Typography>
        <Text variant="h5">
          I'm a Full Stack Developer
          <Box component="span" style={{ marginLeft: 5,padding:'10px' }}>
            <Link
              href="https://github.com/YelveTejas"
              color="inherit"
              target="_blank"
            >
              <GitHub />
            </Link>
          </Box>
        </Text>
        <Text variant="h5">
          I am a passionate Full Stack Web Developer who recently completed the
          Masai Full Stack web development course. Equipped with a strong
          foundation in JavaScript, React, Redux, Mongoose, Express, Node.js,
          and NPM, I am well-versed in both frontend and backend technologies.
          Throughout my education, I consistently demonstrated academic
          excellence, fueled by my unwavering interest in web development.
          Having successfully completed various group and individual projects, I
          possess hands-on experience in building dynamic and responsive web
          applications. My technical skills as a frontend developer and my
          ability to manage brands effectively have been honed through projects
          I have built. Alongside my technical expertise, I excel in teamwork
          and communication, which have proven instrumental in collaborating
          with diverse teams. My work matters because I strive to create
          exceptional user experiences through my web development projects. By
          leveraging my skills in JavaScript, React, and other technologies, I
          aim to craft visually appealing and user-friendly interfaces that
          captivate and engage audiences. I understand the significance of
          seamless navigation, intuitive design, and optimal performance, which
          contributes to an enhanced user experience. Moving forward, my career
          goal is to contribute to the growth of innovative web development
          projects. I aspire to work with a dynamic team where I can continue to
          learn and expand my skillset. By staying up-to-date with the latest
          industry trends and continuously improving my knowledge, I aim to make
          a lasting impact in the field of web development.
          
        </Text>
      </Wrapper>
    </Box>
  );
};

export default About;
