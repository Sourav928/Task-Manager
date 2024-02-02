import axios from "axios";

const API_URL = "http://localhost:8000";

//------------------------------------------------------------------------

const updateTask = async (data) => {
  try {
    const res = await axios.put(`${API_URL}/update/${data._id}`, data);
    if (res.status === 200) {
      return { isSuccess: true, data: res.data };
    } else {
      return { isFailure: true, msg: "Unexpected response from server" };
    }
  } catch (error) {
    console.error("Error while updating task", error);
    return { isFailure: true, msg: "Error while updating task" };
  }
};
const getTaskById = async (id) => {
  try {
    const res = await axios.get(`${API_URL}/task/${id}`);
    if (res.status === 200) {
      return { isSuccess: true, data: res.data };
    } else {
      return { isFailure: true, msg: "Unexpected response from server" };
    }
  } catch (error) {
    console.error("Error while getting task", error);
    return { isFailure: true, msg: "Error while getting task" };
  }
};

const getAllTask = async () => {
  try {
    const res = await axios.get(`${API_URL}/tasks`);
    if (res.status === 200) {
      return { isSuccess: true, data: res.data };
    } else {
      return { isFailure: true, msg: "Unexpected response from server" };
    }
  } catch (error) {
    console.error("Error while getting all task", error);
    return { isFailure: true, msg: "Error while getting all task" };
  }
};

const createTask = async (data) => {
  try {
    const res = await axios.post(`${API_URL}/create`, data);
    if (res.status === 200) {
      return { isSuccess: true, data: res.data };
    } else {
      return { isFailure: true, msg: "Unexpected response from server" };
    }
  } catch (error) {
    console.error("Error while creating task:", error);
    return { isFailure: true, msg: "Error while creating task" };
  }
};

//-------------------------------------------------------------------------

const userLogin = async (data) => {
  try {
    const response = await axios.post(`${API_URL}/login`, data);
    if (response.status === 200) {
      return { isSuccess: true, data: response.data };
    } else {
      return { isFailure: true, msg: "Unexpected response from server" };
    }
  } catch (error) {
    console.error("Error while logging in:", error);
    return { isFailure: true, msg: "Error while login" };
  }
};

const userSignup = async (data) => {
  try {
    let response = await axios.post(`${API_URL}/signup`, data);
    if (response.status === 200) {
      return { isSuccess: true, data: response.data };
    }
  } catch (error) {
    return { isFailure: true, msg: "Error while signup" };
  }
};

/*-------------------------------------------------------------------*/
const deleteTask = async (id) => {
  try {
    let response = await axios.delete(`${API_URL}/delete/${id}`, {});
    if (response?.status === 200) {
      return { isSuccess: true, data: response.data };
    } else {
      return {
        isFailure: true,
        status: response?.status,
        msg: response?.msg,
        code: response?.code,
      };
    }
  } catch (error) {
    return { isFailure: true, msg: "Error deleting post" };
  }
};

export {
  userLogin,
  userSignup,
  createTask,
  getTaskById,
  getAllTask,
  updateTask,
  deleteTask,
};
