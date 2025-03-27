import { Fragment } from "react";
import { styled, Box } from "@mui/material";
//components

import NavBar from "./NavBar";
import Banner from "./Banner";

const Container = styled(Box)`
    background:#fff4eb;
    background:#d0d0d0;
    padding: 20px 15px;
   
`;

const Home = () => {
    return(
        <Fragment>
            <NavBar/>
            <Container>
                <Banner/>
            </Container>
        </Fragment>

    )
}

export default Home;