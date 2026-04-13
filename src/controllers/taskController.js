import * as taskService from "../services/taskService.js";

export const getTasks = async (req, res) => {
  try {
    const { completed } = req.query;

    let parsedCompleted;

    if (completed === undefined) {
      parsedCompleted = undefined;
    } else if (completed === "true") {
      parsedCompleted = true;
    } else if (completed === "false") {
      parsedCompleted = false;
    } else {
      return res.status(400).json({ error: "Invalid completed value" });
    }

    const tasks = await taskService.getAllTasks(parsedCompleted);
    res.json(tasks);
  } catch (error) {
    console.error("REAL ERROR:", error);
    res.status(500).json({ error: error.message });
  }
};

export const createTask = async (req, res) => {
  try {
    const newTask = await taskService.createTask(req.body);
    res.status(201).json(newTask);
  } catch (error) {
    console.error("CREATE ERROR:", error);
    res.status(400).json({ error: error.message });
  }
};