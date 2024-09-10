const client = require("../config/dbConfig");

// Fetch all tasks
const getAllTasks = async () => {
  try {
    const res = await client.query("SELECT * FROM tasks");
    return res.rows;
  } catch (error) {
    throw new Error("Error fetching tasks: " + error.message);
  }
};

// Fetch a task by ID
const getTaskById = async (id) => {
  try {
    const res = await client.query("SELECT * FROM tasks WHERE id = $1", [id]);
    return res.rows[0];
  } catch (error) {
    throw new Error("Error fetching task: " + error.message);
  }
};

const createNewTask = async (task) => {
  const {
    task_name,
    task_status,
    deadline,
    created_date,
    updated_date,
    task_desc,
  } = task;
  try {
    const res = await client.query(
      "INSERT INTO tasks (task_name, task_status, deadline, created_date, updated_date, task_desc) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
      [task_name, task_status, deadline, created_date, updated_date, task_desc]
    );
    return res.rows[0]; // Return the newly created task
  } catch (error) {
    throw new Error("Error creating task: " + error.message);
  }
};

const updateTask = async (id, task) => {
  const { task_name, deadline, created_date, updated_date, task_desc } = task;
  try {
    const res = await client.query(
      "UPDATE tasks SET task_name = $1, deadline = $2, created_date = $3, updated_date = $4, task_desc = $5 WHERE id = $6 RETURNING *",
      [task_name, deadline, created_date, updated_date, task_desc, id]
    );
    return res.rows[0]; // Return the updated task
  } catch (error) {
    throw new Error("Error updating task: " + error.message);
  }
};

// Delete a task by ID
const deleteTask = async (id) => {
  try {
    const res = await client.query(
      "DELETE FROM tasks WHERE id = $1 RETURNING *",
      [id]
    );
    return res.rows[0]; // Return the deleted task
  } catch (error) {
    throw new Error("Error deleting task: " + error.message);
  }
};

module.exports = {
  getAllTasks,
  getTaskById,
  createNewTask,
  updateTask,
  deleteTask,
};
