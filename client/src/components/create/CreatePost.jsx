import { useState } from "react";
import {
  TextField,
  Grid,
  styled,
  Box,
  Typography,
  Button,
} from "@mui/material";
import { createTask } from "../../service/api";
import { useNavigate } from "react-router-dom";

const Container = styled(Box)`
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 10px;
`;

const Heading = styled(Typography)`
  margin-top: 64px;
  margin-bottom: 20px;
  font-size: 40px;
  color: #000;
  line-height: 1;
  padding: 5px;
`;

const StyledBox = styled(Box)`
  padding: 20px;
  background: #a5a5a5;
`;

const initialTask = {
  title: "",
  dueDate: "",
  description: "",
};

const Taskform = () => {
  const [task, setTask] = useState(initialTask);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const uploadData = async () => {
      const res = await createTask(task);
      if (res.isSuccess) {
        console.log("Succesfully created task");
        setTask(initialTask);
        navigate("/");
      } else {
        console.log("Failed to create task");
      }
    };
    uploadData();
  };

  const handleBack = (e) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <>
      <Container>
        <Heading>Task Manager</Heading>
        <StyledBox>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Title"
                  name="title"
                  value={task.title}
                  onChange={handleChange}
                  style={{
                    background: "#fff",
                    borderRadius: "4px",
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Due Date"
                  name="dueDate"
                  type="date"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  value={task.dueDate}
                  onChange={handleChange}
                  style={{
                    background: "#fff",
                    borderRadius: "4px",
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Description"
                  name="description"
                  multiline
                  rows={4}
                  value={task.description}
                  onChange={handleChange}
                  style={{
                    background: "#fff",
                    borderRadius: "4px",
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  onClick={(e) => handleSubmit(e)}
                  style={{ margin: "10px" }}
                >
                  Create Task
                </Button>
                <Button
                  type="submit"
                  variant="contained"
                  color="warning"
                  onClick={(e) => handleBack(e)}
                  style={{ margin: "10px" }}
                >
                  Back
                </Button>
              </Grid>
            </Grid>
          </form>
        </StyledBox>
      </Container>
    </>
  );
};

export default Taskform;
