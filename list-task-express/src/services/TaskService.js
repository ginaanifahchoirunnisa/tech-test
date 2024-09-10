const Task = require("../models/Task");
const taskRepository = require("../repositories/TaskRepository");

const getAllTasks = async () => {
  const tasksData = await taskRepository.getAllTasks();
  return tasksData.map(
    (task) =>
      new Task(
        task.id,
        task.task_name,
        task.deadline,
        task.created_date,
        task.updated_date,
        task.task_desc
      )
  );
};

const getTaskById = async (id) => {
  const taskData = await taskRepository.getTaskById(id);
  if (taskData) {
    return new Task(
      taskData.id,
      taskData.task_name,
      taskData.deadline,
      taskData.created_date,
      taskData.updated_date,
      taskData.task_desc
    );
  }
  return null;
};

const createNewTask = async (task) => {
  const taskInput = new Task();
  taskInput.task_name = task.task_name;
  taskInput.task_desc = task.task_desc;
  taskInput.deadline = task.deadline;
  taskInput.task_status = task.task_status;

  const today = new Date().toISOString().split("T")[0];
  taskInput.created_date = today; // date only
  taskInput.updated_date = today;

  const taskData = await taskRepository.createNewTask(taskInput);

  return new Task(
    taskData.id,
    taskData.task_name,
    taskData.task_status,
    taskData.deadline,
    taskData.created_date,
    taskData.updated_date,
    taskData.task_desc
  );
};

const updateTask = async (id, task) => {
  const taskData = await taskRepository.updateTask(id, task);
  if (taskData) {
    return new Task(
      taskData.id,
      taskData.task_name,
      taskData.deadline,
      taskData.created_date,
      taskData.updated_date,
      taskData.task_desc
    );
  }
  return null;
};

const deleteTask = async (id) => {
  const taskData = await taskRepository.deleteTask(id);
  if (taskData) {
    return new Task(
      taskData.id,
      taskData.task_name,
      taskData.deadline,
      taskData.created_date,
      taskData.updated_date,
      taskData.task_desc
    );
  }
  return null;
};

module.exports = {
  getAllTasks,
  getTaskById,
  createNewTask,
  updateTask,
  deleteTask,
};
