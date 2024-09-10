class Task {
  constructor(
    id,
    task_name,
    task_status,
    deadline,
    created_date,
    updated_date,
    task_desc
  ) {
    this.id = id;
    this.task_name = task_name;
    this.task_status = task_status;
    this.deadline = deadline;
    this.created_date = created_date;
    this.updated_date = updated_date;
    this.task_desc = task_desc;
  }
}

module.exports = Task;
