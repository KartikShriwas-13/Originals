import { Box, InputBase, styled } from "@mui/material";
// import SearchIcon from "@mui/icons-material"
import SearchIcon from "@mui/icons-material/Search";


const SearchContainer= styled(Box)`
background: #fff4eb;
width: 38%;
border-radius: 4px;
margin-left: 8%;
display: flex;
`;

const SearchIconWrapper = styled(Box)`
color: #231206;
padding: 6px;
display: flex;
`;

const InputSearchBase = styled(InputBase)`
padding-left: 20px;
width: 100%;
font-sixe: unset;
`;

const Search = () => {
    return(
        <SearchContainer>
            <InputSearchBase
                placeholder="Search for products"
            />
            <SearchIconWrapper>
                <SearchIcon/>
            </SearchIconWrapper>
        </SearchContainer>

    )
}

export default Search;