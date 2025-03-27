import {AppBar, Toolbar, Box, styled} from '@mui/material';

import Logo from '../../components/header/logo-s.png';
import Search from './Search'
import CustomButtons from './CustonButtons';

const StyledHeader = styled(AppBar)`
background:#231206;
heigth:65px;
`;

const Component = styled(Box)`
margin-left: 4%;
`;

const Wrapper = styled(Box)`
margin:0 5% 0 auto;
`;

const Header = () => {

    return (
        <StyledHeader>
            <Toolbar>
                <Component>
                    <img src={Logo} alt="logo" style={{ width : 75 }} />    
                    
                </Component>
                <Search/>
                <Wrapper>
                    <CustomButtons/>
                </Wrapper>
            </Toolbar>
        </StyledHeader>
    )
}

export default Header;