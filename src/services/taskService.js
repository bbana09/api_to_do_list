const { createTask } = require('../models/taskModel');

let tasks = [];
let idCounter = 1;

//criar
const addTask = (title) => {
    const task = createTask(idCounter++, title);
    tasks.push(task);
    return task;
};
//listar
const getTasks = () => tasks;
//atualizar
const updateTask = (id, title) => {
    const task = task.find(tasks.id == id);
    if (!task) return null;

    task.title = title;
    return task;
};
//deletar
const deleteTask = (id) => {
    const index = tasks.findIndex(t => t.id == id);
    if(index ===-1) return false;

    tasks.splice(index, 1);
    return true;
};

module.exports = {
    addTask,
    getTasks,
    updateTask,
    deleteTask
};