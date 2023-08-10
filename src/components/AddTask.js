import axios from 'axios';
import { toast } from "react-toastify";
import { Button, Form, Input } from 'antd';
import { useState } from 'react';

const AddTask = ({ token, user }) => {
    const { TextArea } = Input
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [dueDate, setDueDate] = useState("");
    const [reminderDate, setReminderDate] = useState("");

    const onSubmit = async () => {
        const task = {
            title,
            desc,
            dueDate,
            reminderDate,
            user: user
        };

        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };

        await axios
            .post("http://localhost:3000/tasks/createTask", task, config)
            .then((res) => {
                toast.success(`Task Added!`);
                window.location.reload()
            })
            .catch((e) => {
                toast.error(`Task Addition Failed!`);
            });
    };

    return (
        <div>
            <h3 style={{ textAlign: "center", marginBottom: "10px" }}>Add a task</h3>
            <Form name='task-form' layout='vertical'>
                <Form.Item label="Task Title" name="task-title">
                    <Input value={title} onChange={(e) => setTitle(e.target.value)} />
                </Form.Item>
                <Form.Item label="Task Description" name="task-desc">
                    <TextArea rows={2} value={desc} onChange={(e) => setDesc(e.target.value)} />
                </Form.Item>
                <Form.Item label="Due Date" name="task-due">
                    <Input type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} />
                </Form.Item>
                <Form.Item label="Reminder Date" name="task-rem">
                    <Input type="date" value={reminderDate} onChange={(e) => setReminderDate(e.target.value)} />
                </Form.Item>
                <Form.Item>
                    <Button style={{ width: "100%", backgroundColor: "#000" }} type="primary" onClick={onSubmit}>
                        Add Task
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default AddTask