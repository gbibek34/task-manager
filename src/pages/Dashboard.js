import dayjs from "dayjs";
import { useEffect, useState } from "react";
import TaskCard from "../components/TaskCard";

const Dashboard = ({ tasks }) => {

    const [todayTasks, setTodayTasks] = useState([])

    useEffect(() => {
        const today = dayjs()
        if (tasks) {
            setTodayTasks(tasks.filter(task => {
                const taskDate = dayjs(task.dueDate);
                return taskDate.isSame(today, 'day') && task.status === 'Incomplete';
            }))
        }
    }, [tasks])

    return (
        <>
            <div className="header">
                <div className="page-title">
                    Today's Tasks
                </div>
            </div>
            <div>
                <div className="task-section">
                    {todayTasks.map((task) => (
                        <TaskCard key={task.id} task={task} />
                    ))}

                </div>
            </div>
        </>
    )
}

export default Dashboard