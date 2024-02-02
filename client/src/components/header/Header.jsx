import { AppBar, Toolbar, styled, Button, Box } from "@mui/material";
import { useContext } from "react";
import { Link } from "react-router-dom";

// import { useNavigate } from "react-router-dom";
import { DataContext } from "../../context/DataProvider";

const Component = styled(AppBar)`
  background: #ffffff;
  color: black;
`;

const Image = styled("img")({
  width: 50,
  height: 50,
  padding: "5px",
});

const Container = styled(Toolbar)`
  justify-content: space-between;
  & > a {
    padding: 20px;
    color: #000;
    text-decoration: none;
  }
`;

const StyledBox = styled(Box)`
  display: flex;
  align-items: center;
`;

const LoginButton = styled(Button)`
  padding: 5px;
`;
const Header = () => {
  // const navigate = useNavigate();
  // const logout = async () => navigate("/account");
  const imageURL =
    "https://upload.wikimedia.org/wikipedia/commons/2/2c/Default_pfp.svg";
  const { account } = useContext(DataContext);

  return (
    <Component>
      <Container>
        <StyledBox>
          <Image src={imageURL} alt="blog" />
          <h3>{account.name}</h3>
        </StyledBox>

        <Link to="/account">
          <LoginButton variant="outlined">Logout</LoginButton>
        </Link>
      </Container>
    </Component>
  );
};

export default Header;
