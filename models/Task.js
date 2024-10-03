import { Schema, model } from 'mongoose';

const taskSchema = new Schema({
    name: { type: String, required: true, minlength: 3, maxlength: 100 },
    done: { type: Boolean, default: false },
    dueDate: { type: Date },
}, { timestamps: true });

export default model('Task', taskSchema);
