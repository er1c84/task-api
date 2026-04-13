import prisma from "../config/db.js";

// GET all tasks (with optional filter)
export async function getAllTasks(completed) {
  if (completed === undefined) {
    return prisma.task.findMany();
  }

  return prisma.task.findMany({
    where: {
      completed: completed,
    },
  });
}

// CREATE a task
export async function createTask(data) {
  return prisma.task.create({
    data: {
      title: data.title,
      completed: data.completed ?? false,
    },
  });
}