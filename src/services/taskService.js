import * as taskRepo from "../repositories/taskRepo.js";

export async function getAllTasks(completed) {
  return taskRepo.getAllTasks(completed);
}

export async function createTask(data) {
  return taskRepo.createTask(data);
}