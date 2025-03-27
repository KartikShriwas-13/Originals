import { Box, styled, Typography } from "@mui/material";
import { navData } from "../constants/data";

const Image  = styled("img")`
width: 68px;
`;

const Component  = styled(Box)`
display: flex;
margin: 55px 10% 0 10%;
justify-content: space-between;
`;

const Container  = styled(Box)`
padding: 8px 8px;
text-align: center;

`;

const Text  = styled(Typography)`
font-size: 16px;
font-family:inherit;
font-weight: 500;

`;


const NavBar = () => {
    return(
        <Component>
            {
                navData.map(data=>(
                    <Container>
                        <Image src={data.url} alt="navImg"/>
                        <Text>{data.text}</Text>
                    </Container>

                ))
            }
        </Component>
    )
}

export default NavBar;