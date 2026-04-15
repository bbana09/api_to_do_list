const taskController = require('../controllers/taskController');

module.exports = (req, res) => {
    const url = req.url;
    const method = req.method;

    //get /tasks
    if (url === '/tasks' && method === 'GET'){
        return taskController.listTasks(req, res);
    }
    //POST / tasks
    if(url ==='/tasks' && method === 'POST') {
        return taskController.createTask(req, res);
    }
    // PUT /tasks/:id
    if (url.startsWith('/tasks/')&& method === 'PUT') {
        const id = url.split('/')[2];
        return taskController.updatetTask(req, res, id);
    }
    //DELETE/ task/:id
    if (url.startsWith('/tasks/')&& method === 'DELETE'){
        const id = url.split('/')[2];
        return taskController.deleteTask(req, res, id);
    }
    //rota não encontrada
    res.statusCode= 404;
    res.end(JSON.stringify({ message: 'Rota não encontrada' }));
};