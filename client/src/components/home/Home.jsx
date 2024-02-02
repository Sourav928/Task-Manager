//components
import { Box, Button } from "@mui/material";

import Tasks from "../Task/Tasks";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";

const Container = styled(Box)`
  margin-top: 64px;
  margin: 90px auto auto;
  padding: 20px;
  width: 80%;
  background: #4e4e4e;
  border-radius: 8px;
`;

const StyledBox = styled(Box)`
  background: #cdcdcd;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  padding: 10px;
  margin: 10px;
`;

const Home = () => {
  return (
    <>
      <Container>
        <StyledBox>
          <Link to={"/create"}>
            <Button variant="contained">Create Task</Button>
          </Link>
        </StyledBox>
        <Tasks />
      </Container>
    </>
  );
};

export default Home;
