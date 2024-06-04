import {  Box, Container, Grid, Typography, styled } from "@mui/material"
import Avatar from "../../../../assets/images/avatar.png"
import DownloadIcon from '@mui/icons-material/Download';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';
import StyledButton from "../../../../components/StyledButtons/StyledButton";
import theme from "../../../../theme";
import { AnimatedBackground } from "../../../../components/AnimatedBackground/AnimatedBackground";
const Hero = () => {
    const StyledHero = styled("div")(({theme})=>({
        backgroundColor: theme.palette.primary.main,
        height:"100vh",
        display:"flex",
        alignItems:"center",
        [theme.breakpoints.up('xs')]:{ // <= Mobile
            paddingTop: "100px"
        },
        [theme.breakpoints.up('md')]:{ // >= Mobile
            paddingTop: "100px"
        }
    }))

    const StyledImg = styled("img")(()=>({
        width:"75%",
        borderRadius:"50%",
        border: `1px solid  ${theme.palette.primary.contrastText}`,
    }))
    return (
      <>
        <StyledHero>
            <Container maxWidth="lg">
                <Grid container spacing={2}>
                    
                    <Grid item xs={12} md ={5}>
                        <Box position="relative">
                            <Box position="absolute" width={"150%"} top={-100} right={0}>
                                <AnimatedBackground></AnimatedBackground>
                            </Box>
                            <Box position="relative" textAlign={"center"}>
                                <StyledImg src={Avatar}/>
                            </Box>
                        </Box>

                    </Grid>
                    <Grid item xs={12} md={7}>
                        <Typography color = "primary.contrastText" variant = "h1" textAlign="center" paddingBottom={2}>Ricardo Gomes</Typography>
                        <Typography color = "primary.contrastText" variant = "h2" textAlign="center">I'm a junior Developer</Typography>
                        <Grid container display="flex" justifyContent="center" spacing={3} paddingTop={3}>
                            <Grid item xs={12} md={4} display="flex" justifyContent="center">
                                <StyledButton onClick={()=>window.location.href = "https://drive.google.com/file/d/17qmmQt6Us_NfQTsfCmXHxrybI6bSqRy4/view?usp=sharing"}>
                                    <DownloadIcon></DownloadIcon>
                                    <Typography>DOWNLOAD CV</Typography>
                                </StyledButton>
                            </Grid>
                            <Grid item xs={12} md={4} display="flex" justifyContent="center">
                                <StyledButton onClick={()=>window.location.href = "https://www.linkedin.com/in/ricardo-gomes-b368b6286/"}>
                                <LinkedInIcon></LinkedInIcon>
                                    <Typography>CONTACT ME</Typography>
                                </StyledButton>
                            </Grid>
                        </Grid>
                        <Grid container display="flex" justifyContent="center" spacing={3} paddingTop={3}>
                            <Grid item xs={12} md={4} display="flex" justifyContent="center">
                                <StyledButton onClick={()=>window.location.href = "https://github.com/caponzn"}>
                                    <GitHubIcon></GitHubIcon>
                                    <Typography>PROJECTS</Typography>
                                </StyledButton>
                            </Grid>
                            <Grid item xs={12} md={4} display="flex" justifyContent="center">
                                <StyledButton onClick={()=>window.location.href = "https://www.youtube.com/channel/UCm2q_BlF31IqMWGifHGTJ9w"}>
                                <YouTubeIcon></YouTubeIcon>
                                    <Typography>YOUTUBE</Typography>
                                </StyledButton>
                            </Grid>
                        </Grid>
                       
                    </Grid>
                
                </Grid>
            </Container>
            
        </StyledHero>
      </>
    )
  }
  
  export default Hero
  