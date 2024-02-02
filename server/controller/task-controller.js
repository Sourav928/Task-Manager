import Task from "../model/task.js";
import AWS from "aws-sdk";
import { DynamoDBClient, PutItemCommand } from "@aws-sdk/client-dynamodb";

const dynamodbClient = new DynamoDBClient({ region: "us-east-2" });

const dynamodb = new AWS.DynamoDB.DocumentClient();
const dynamodbTableName = "task-manager";

export const createTask = async (request, response) => {
  try {
    const post = await new Task(request.body);

    post.save();

    response.status(200).json("Task Create succesfully");
  } catch (error) {
    response.status(500).json(error);
  }
};

export const updateTask = async (request, response) => {
  try {
    const task = await Task.findById(request.params.id);

    if (!task) {
      response.status(404).json({ msg: "Task not found" });
    }

    await Task.findByIdAndUpdate(request.params.id, { $set: request.body });

    response.status(200).json("Task updated successfully");
  } catch (error) {
    response.status(500).json(error);
  }
};

export const deleteTask = async (request, response) => {
  try {
    const task = await Task.findById(request.params.id);

    if (!task) {
      return response.status(404).json({ msg: "Task not found" });
    }
    // console.log("Response sent:", response.body);
    await task.delete();
    response.status(200).json("Task deleted successfully");
  } catch (error) {
    response.status(500).json(error);
  }
};

export const getTask = async (request, response) => {
  try {
    const post = await Task.findById(request.params.id);

    response.status(200).json(post);
  } catch (error) {
    response.status(500).json(error);
  }
};

export const getAllTask = async (request, response) => {
  try {
    const tasks = await Task.find({}).sort({ dueDate: -1 });

    response.status(200).json(tasks);
  } catch (error) {
    response.status(500).json(error);
  }
};
