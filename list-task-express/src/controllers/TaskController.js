const taskService = require("../services/TaskService");

const getAllTasks = async (req, res) => {
  try {
    const tasks = await taskService.getAllTasks();
    res.json(tasks);
  } catch (error) {
    console.error("Error fetching tasks:", error.message); // Logging the error
    res
      .status(500)
      .json({ error: "Failed to fetch tasks. Please try again later." });
  }
};

const getTaskById = async (req, res) => {
  try {
    const task = await taskService.getTaskById(req.params.id);
    if (task) {
      res.json(task);
    } else {
      res.status(404).json({ message: "Task not found" });
    }
  } catch (error) {
    console.error("Error fetching task by ID:", error.message);
    res
      .status(500)
      .json({ error: "Failed to fetch task. Please try again later." });
  }
};

const createTask = async (req, res) => {
  const {
    task_name,
    task_status,
    deadline,
    created_date,
    updated_date,
    task_desc,
  } = req.body;
  if (
    !task_name ||
    !task_status ||
    !deadline ||
    !created_date ||
    !updated_date ||
    !task_desc
  ) {
    return res.status(400).json({ error: "All fields are required." });
  }

  try {
    const task = await taskService.createNewTask(req.body);
    res.status(201).json(task);
  } catch (error) {
    console.error("Error creating task:", error.message); // Logging the error
    res
      .status(500)
      .json({ error: "Failed to create task. Please try again later." });
  }
};

const updateTask = async (req, res) => {
  // Example validation
  const {
    task_name,
    task_status,
    deadline,
    created_date,
    updated_date,
    task_desc,
  } = req.body;
  if (
    !task_name ||
    !task_status ||
    !deadline ||
    !created_date ||
    !updated_date ||
    !task_desc
  ) {
    return res.status(400).json({ error: "All fields are required." });
  }

  try {
    const task = await taskService.updateTask(req.params.id, req.body);
    if (task) {
      res.json(task);
    } else {
      res.status(404).json({ message: "Task not found" });
    }
  } catch (error) {
    console.error("Error updating task:", error.message);
    res
      .status(500)
      .json({ error: "Failed to update task. Please try again later." });
  }
};

const deleteTask = async (req, res) => {
  try {
    const task = await taskService.deleteTask(req.params.id);
    if (task) {
      res.json(task);
    } else {
      res.status(404).json({ message: "Task not found" });
    }
  } catch (error) {
    console.error("Error deleting task:", error.message); // Logging the error
    res
      .status(500)
      .json({ error: "Failed to delete task. Please try again later." });
  }
};

module.exports = {
  getAllTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
};
