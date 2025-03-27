// import { styled } from "@mui/material";
// import Carousel from "react-multi-carousel";
// import 'react-multi-carousel/lib/styles.css';
// import { BannerImg } from "../constants/data";



// const Image = styled("img")({
//     width: 1200, 
//     height: 280, 
// });
// const responsive = {
//     desktop: {
//       breakpoint: { max: 3000, min: 1024 },
//       items: 3
//     },
//     tablet: {
//       breakpoint: { max: 1024, min: 464 },
//       items: 2
//     },
//     mobile: {
//       breakpoint: { max: 464, min: 0 },
//       items: 1
//     }
//   };


// const Banner = () => {
//     return(
     
//        <Carousel
//        responsive = {responsive}
//        dotListClass="custom-dot-list-style"
//        itemClass="carousel-item-padding-40-px"
//        containerClass="carousel-container"
//        swipeable={false}
//        draggable={false}
//        infinite={true}
//        >
//         {
//             BannerImg.map (data => (
//                 <Image src={data.url} alt="banner" />
//             ))
//         }
//        </Carousel>
     
//     )
// }

// export default Banner;


import { Box, styled } from "@mui/material";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { BannerImg } from "../constants/data";

const Container = styled(Box)({
    width: "100%",
    maxWidth: "100%" 
    
    
});

const Image = styled("img")({
    width: "100%", 
    height: 260, 
    objectFit: "cover", 
    borderRadius: "10px"
});

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1, 
        partialVisibilityGutter: 0, 
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1
    },
    // mobile: {
    //     breakpoint: { max: 464, min: 0 },
    //     items: 1
    // }
};

const Banner = () => {
    return (
        <Container>
           <Carousel
               responsive={responsive}
               infinite={true} 
               autoPlay={true} 
               autoPlaySpeed={3000} 
               removeArrowOnDeviceType={["tablet", "mobile"]}
           >
               {BannerImg.map((data, index) => (
                   <Image key={index} src={data.url} alt="banner" />
               ))}
           </Carousel>
        </Container>
    );
}

export default Banner;
