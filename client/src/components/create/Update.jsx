import { useEffect, useState } from "react";
import {
  TextField,
  Grid,
  styled,
  Box,
  Typography,
  Button,
} from "@mui/material";
import { createTask, getTaskById, updateTask } from "../../service/api";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../header/Header";

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

  const { id } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const res = await getTaskById(id);
      if (res.isSuccess) {
        setTask(res.data);
      } else {
        console.log("Error failed to get task.");
      }
    };
    fetchData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updateData = async () => {
      const res = await updateTask(task);
      if (res.isSuccess) {
        console.log("Succesfully update task");
        setTask(initialTask);
        navigate("/");
      } else {
        console.log("Failed to update task");
      }
    };
    updateData();
  };

  const handleBack = (e) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <>
      <Header />
      <Container>
        <Heading>Task Manager</Heading>
        <StyledBox>
          <form>
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
                  value={task.dueDate}
                  InputLabelProps={{
                    shrink: true,
                  }}
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
                  Update Task
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
