import {Dialog, Box, TextField, Typography, Button, styled} from '@mui/material';
import captureImage from './Capture.PNG';

const Component = styled(Box)`
    height: 70vh;
    width : 100vh;
    
`;

const Field = styled(TextField)`
width: 100%;

`;

const Image = styled(Box)`
background: #231206 url(${captureImage}) no-repeat; 
background-size: cover;
height: 100%;
width:40%;
`;

const LoginButton = styled(Button)`
background: black;
color: #ffffff;
border-radius: 10px;
width: 60%;
font-family: Monospace;
`;

const RequestButton = styled(Button)`
background: #ffffff;
color: #000000;
border-radius: 10px;
width: 65%;
font-family: Monospace;
box-shadow: 1px 2px 4px 0 rgb(0 0 0/ 20%);
`;

const Wrapper = styled(Box)`
display: flex;
flex-direction: column;
padding: 25px 35px;
flex:1;
& > div,& > button, & > p{
    margin-top:15px;
}
`;

const Text = styled(Typography)`
font-family: Monospace;
color: #878787;
font-size: 14px;

`;

const CreateAccount = styled(Typography)`
font-family: Monospace;
font-size: 16px;
cursor: pointer;
  &:hover {
    text-decoration: underline;
    color: #000;
  }
`;


const LoginDialog =({open, setOpen }) => {

    const handleClose =()=>{
        setOpen(false);
    }

    return(
        <Dialog open ={open} onClose={handleClose}>
            <Component>
                <Box style={{display: 'flex',height:'100%'}}>
                <Image/>
                <Wrapper style={{alignItems: 'center'}}>
                    <Field label="Enter Email/Mobile number" variant="outlined"/>
                    <Field label="Enter Password" variant="outlined"/>
                    <Text>By Signing In, you agree to Terms & Conditions and Privacy Policy</Text>
                    <LoginButton>Login</LoginButton>
                    <Text>OR</Text>
                    <RequestButton>Request OTP</RequestButton>
                    <CreateAccount>Create an account</CreateAccount>

                </Wrapper>
                </Box>
            </Component>
        </Dialog>
    )
}

export default LoginDialog;