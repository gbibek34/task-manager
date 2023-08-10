import axios from 'axios'
import dayjs from 'dayjs'
import { toast } from "react-toastify";

import { FaRegStar, FaPenToSquare, FaRegCircleCheck, FaRegTrashCan, FaCircleCheck } from "react-icons/fa6"
import { useState } from 'react';
import UpdateTask from './UpdateTask';
import { Popconfirm } from 'antd';

const TaskCard = ({ task }) => {

    const [modalOpen, setModalOpen] = useState(false);

    const showModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    const completeHandler = async () => {
        const updatedTask = {
            status: "Complete"
        }
        await axios.put(`/tasks/update/${task.id}`, updatedTask)
            .then((res) => {
                toast.success(`Task Marked Complete!`)
                window.location.reload()
            }).catch((e) => {
                toast.error("Task Update Failed!")
            });
    }
    const incompleteHandler = async () => {
        const updatedTask = {
            status: "Incomplete"
        }
        await axios.put(`/tasks/update/${task.id}`, updatedTask)
            .then((res) => {
                toast.success(`Task Marked Incomplete!`)
                window.location.reload()
            }).catch((e) => {
                toast.error("Task Update Failed!")
            });
    }

    const importantHandler = async () => {
        // Place the update logic here
    }

    const deleteHandler = async () => {
        await axios.delete(`/tasks/delete/${task.id}`)
            .then((res) => {
                toast.success("Task Deleted!")
                window.location.reload()
            }).catch((e) => {
                toast.error("Task Deletion Failed!")
            })
    }
    return (
        <>
            <div className="task-card" key={task.id}>
                <div className="task-details">
                    <div className="task-title">
                        {task.title}
                    </div>
                    <div className="task-desc">
                        {task.desc}
                    </div>
                    <div className="task-due">
                        Due: {dayjs(task.dueDate).format("DD/MM/YYYY")}
                    </div>
                    <div className="task-rem">
                        Reminder: {dayjs(task.reminderDate).format("DD/MM/YYYY")}
                    </div>
                </div>
                <div className="task-options">
                    <div className="task-option">
                        {task.status === "Complete" ? <FaCircleCheck onClick={incompleteHandler} /> :
                            <FaRegCircleCheck onClick={completeHandler} />
                        }
                    </div>
                    <div className="task-option">
                        {task.status === "Complete" ? null :
                            <FaRegStar onClick={importantHandler} />
                        }
                    </div>
                    <div className="task-option">
                        {task.status === "Complete" ? null :
                            <FaPenToSquare onClick={showModal} />
                        }
                        <UpdateTask open={modalOpen} close={closeModal} task={task} />
                    </div>
                    <div className="task-option">
                        <Popconfirm
                            title="Delete the task"
                            description="Are you sure to delete this task?"
                            onConfirm={deleteHandler}
                            okText="Yes"
                            cancelText="No"
                        >
                            <div>
                                <FaRegTrashCan />
                            </div>
                        </Popconfirm>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TaskCard