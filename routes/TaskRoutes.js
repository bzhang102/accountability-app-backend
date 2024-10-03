import { Router } from 'express';
const router = Router();
import Task from '../models/Task.js';


router.get('/test-connection', async (req, res) => {
    try {
        const tasks = await Task.find(); // Assuming Task is your model
        res.json({ message: 'Connection successful!', tasks });
    } catch (error) {
        res.status(500).json({ message: 'Failed to connect', error });
    }
});

// Get all tasks
router.get('/', async (req, res) => {
    try {
        const tasks = await Task.find();
        res.json(tasks);
    } catch (err) {
        res.status(500).json({ message: 'Failed to fetch tasks', error: err });
    }
});

// Add a new task
router.post('/', async (req, res) => {
    try {
        const newTask = new Task(req.body);
        await newTask.save();
        res.json(newTask);
    } catch (err) {
        res.status(500).json({ message: 'Failed to add task', error: err });
    }
});

// Mark task as complete
router.patch('/:id', async (req, res) => {
    try {
        const updatedTask = await Task.findByIdAndUpdate(req.params.id, { done: true }, { new: true });
        res.json(updatedTask);
    } catch (err) {
        res.status(500).json({ message: 'Failed to update task', error: err });
    }
});

// Delete a task
router.delete('/:id', async (req, res) => {
    try {
        await Task.findByIdAndDelete(req.params.id);
        res.json({ message: 'Task deleted' });
    } catch (err) {
        res.status(500).json({ message: 'Failed to delete task', error: err });
    }
});

export default router;