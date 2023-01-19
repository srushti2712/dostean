import { Box, Typography } from '@mui/material';
import { color } from '@mui/system';



import React from 'react'
import Layout from './../components/Layout/Layout';

const About = () => {
  return (
    
    <Layout>
      
            
        <Box sx={{
         
          textAlign:"center",
          p:2,
          backgroundColor:'#E4C0B8',
          padding:0,
          
          "& h2":{
            fontweight:'bold',
            padding:3,
            my:2,
            fontSize:'2.5rem',
            textDecorationColor:'#efebe9',
            backgroundColor:'#E4C0B8',
            fontFamily:'Dancing Script' ,

          },
          "& h4" :{
            padding:1,
            fontweight:'bold',
            m:3,
            backgroundColor:'#E4C0B8',
            fontFamily:'Dancing Script' ,
            textEmphasisColor:'#efebe9',
          
          },
          "& p":{
            textalign: "justify" ,
             fontSize:'1.5rem',
             backgroundColor:'#E4C0B8',
             padding:2,
            
             textEmphasisColor:'#efebe9',
            
          },
          "@media (max-width:1000px)":{
            mt:0,
            backgroundColor:'#E4C0B8'
          }
        }}>
         <Typography variant="h2">
          Welcome to Dostea!!
          </Typography> 
          <Typography variant="h4" >
            Our Story
          </Typography>
          <p>

          We are a surat based startup born on 15 September 2020. <br></br>We 3 friends who are avid tea lovers so we started our very own cafe franchise of Gujarat.<br></br>Our passion for chai, coffee and quick, simple but always delicious meals made us create beautiful memories and amazing experiences from the last 2 years.<br></br> The very first eatable biscuit cup cafe of its type.<br></br>
          *9/10 people like Dostean hot chocolate<br></br>
          Dostea is known for serving chai and hot chocolate in biscuit cups!!<br></br>
          It’s the perfect place to relax on your own or to catch up with friends while enjoying great coffee and great food.</p>
          <Typography variant="h2">
            Our Food
          </Typography>
          <p>
          Our food is all natural, simple food made with local ingredients, wherever possible, to provide you with fresher, healthier and deliciously tasty meals. We have a well stocked pastry cabinet, our food has an international flavor and we offer gluten free, vegetarian and vegan options

          </p>
          <Typography variant="h2">
            We Provide
          </Typography>
          <p>
            Birthday party DJ<br>
            </br>
            Kitty party<br></br>
            Surprise party<br></br>
            Live Music<br></br>
            Candle Light Dinner<br></br>
            Family Party<br></br>
            Anniversary Event<br></br>
            Workshops & many more

          </p>

        </Box>
    </Layout>
    
  );
};

export default About;