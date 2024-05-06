import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css'; // Import CSS if necessary
import {Box, Typography,styled,Button,Divider} from '@mui/material'
import Countdown from 'react-countdown';
import { Link } from 'react-router-dom';
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};


const Component=styled(Box)`
margin-top:10px;
background:#ffffff;

`

const Deal=styled(Box)`
padding:15px 20px;
display:flex

`

const Timer=styled(Box)`
display:flex
margin-left:30px;
color:#7f7f7f
`
const DealText=styled(Typography)`
font-size:20px;
font-weight:600;
margin-right:35px;
line-height:32px
`

const ViewAllButton=styled(Button)`
margin-left:auto;
background-color:#2874f0;
border-radius:2px;
font-size:13px;
font-weight:600
`

const Image=styled('img')`
width:auto,
height:150px
`

const Text=styled(Typography)`
font-size:14px;
margin-top:5px ;

`
function SlideCarousel({ products,title,timer }) {
    const timerURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg';

    const renderer = ({ hours, minutes, seconds, completed }) => {
       return <Box variant="span">  {hours} : {minutes} :{seconds} Left </Box>
      };
  return (
    <Component>
        <Deal>
            <DealText>{title}</DealText>
            {
                timer &&
                <Timer style={{display:"flex"}}>
                <img src={timerURL} alt="timer" style={{width:"24px",marginLeft:"20px"}} />
                <Countdown date={Date.now()+518400000} renderer={renderer} />
            </Timer>
            }
           
            <ViewAllButton variant='contained'>View All</ViewAllButton>
        </Deal>
        <Divider/>
    <Carousel responsive={responsive}
    swipeable={false}
    draggable={false}
    infinite={true}
    autoPlay={true}
    autoPlaySpeed={4000}
    keyBoardControl={true}
   centerMode={true}
   dotListClass='custom-dot-list-style'
   itemClass='carousel-item-padding-40-px'
   containerClass='carousel-container'
    >
      {products.map((ele, index) => (
        <Link to={`products/${ele.id}`} style={{textDecoration:"none"}}>
        <Box key={index} textAlign="center"  style={{marginTop:"40px",padding:"25px 15px"}}>
          <Image  src={ele.image} style={{height:"150px"}} alt="" />
          <Text style={{fontWeight:"600",color:"#212121"}}>{ele.category}</Text>
          <Text style={{color:"green"}}>{ele.title}</Text>
        </Box>
        </Link>
      ))}
    </Carousel>
    </Component>
  );
}

export default SlideCarousel;
