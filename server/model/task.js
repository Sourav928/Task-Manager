import mongoose from "mongoose";

const TaskSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    required: true,
  },
  dueDate: {
    type: Date,
  },
  check: {
    type: Boolean,
    default: false,
  },
});

const task = mongoose.model("task", TaskSchema);

export default task;
