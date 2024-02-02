import React, { useEffect, useState } from "react";
import { deleteTask, getAllTask } from "../../service/api";
import { Button, Grid } from "@mui/material";
import { Link } from "react-router-dom";

const Tasks = () => {
  const [tasks, setTasks] = useState([]);

  const fetchData = async () => {
    const res = await getAllTask();
    if (res.isSuccess) {
      setTasks(res.data);
    } else {
      console.log("Error while fetching tasks.");
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    try {
      const res = await deleteTask(id);
      if (res.isSuccess) {
        fetchData();
      } else {
        console.log("Failed to deleted task.");
      }
    } catch (error) {
      console.log("Error", error);
    }
  };

  return (
    <>
      <ul
        style={{
          listStyle: "none",
          margin: "0 auto",

          padding: "0px",
        }}
      >
        {tasks.map((task) => (
          <li
            key={task._id}
            style={{
              margin: "0 auto",
            }}
          >
            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              style={{
                background: "#cdcdcd",
                margin: "10px auto",
                width: "80%",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              <Grid
                item
                xs={6}
                style={{
                  textAlign: "start",
                }}
              >
                <h1>{task.title}</h1>
              </Grid>
              <Grid
                item
                xs={6}
                style={{
                  textAlign: "center",
                }}
              >
                <Link to={`/update/${task._id}`}>
                  <Button
                    variant="outlined"
                    color="warning"
                    style={{ margin: "21px 15px" }}
                  >
                    Edit
                  </Button>
                </Link>
                <Button
                  variant="outlined"
                  color="error"
                  onClick={() => handleDelete(task._id)}
                  style={{ margin: "15px 0px" }}
                >
                  Delete
                </Button>
              </Grid>
              <Grid
                item
                xs={6}
                style={{
                  textAlign: "start",
                }}
              >
                <p>{task.description}</p>
              </Grid>
              <Grid
                item
                xs={6}
                style={{
                  textAlign: "center",
                }}
              >
                {" "}
                <h4>{task.dueDate ? task.dueDate.slice(0, 10) : "NA"}</h4>
              </Grid>
            </Grid>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Tasks;
