import { useState } from 'react';


import {Box, Button, Typography, styled} from '@mui/material';
import LocalMallIcon from '@mui/icons-material/LocalMall';

//component
import LoginDialog from '../login/LoginDialog';

const Wrapper = styled(Box)`
display: flex;
align-items: center; 
margin: 0 3% 0 auto;
& > button, & > p, & > div{
    margin-right: 40px;
    font-size: 15px;
    color: #fff4eb;
}
`;

const Bagwrap = styled(Box)`
display: flex;
align-items: center;
`;

const LoginButton = styled(Button)`
color: #fff4eb;
padding: 5px 20px;
`;


const CustomButtons = () => {

    const [open,setOpen] = useState(false);

    const openDialog= () =>{
        setOpen(true);
    }

    return(
        <Wrapper>
            <LoginButton variant="text" sx={{whiteSpace: 'nowrap', textTransform: 'none' }} onClick={() => openDialog()}>Sign in</LoginButton>
            <Typography style={ {marginTop: 0,width : 135 } }>Customer Care</Typography>
            <Bagwrap>
                <LocalMallIcon/>
                <Typography>Bag</Typography>
            </Bagwrap>
            <LoginDialog open={open} setOpen={setOpen}/>
        </Wrapper>
        
    );
}

export default CustomButtons;