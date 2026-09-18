import { useState, useEffect } from "react";
import axios from "axios";

import "./Tasks.scss";

function Task() {
    const [tasks, setTask] = useState([]);

    const fetchTasks = async () => {
        try {
            const { data } = await axios.get(
                "http://localhost:5220/api/tarefas",
            );
            setTask(data);
        } catch (error) {
            console.log(error);
        }
    };

    // useEffect com [] para iniciar no inicio da criação do componente;
    useEffect(() => {
        fetchTasks();
    }, []);

    return (
        <div className="tasks-container">
            <h2>Minhas Tarefas</h2>

            <div className="last-tasks">
                <h3>Últimas Tarefas</h3>
                <div className="task-list">
                    {tasks
                        .filter((task) => task.concluida === false)
                        .map((task) => (
                            <p key={task.id}>{task.titulo}</p>
                        ))}
                </div>
            </div>

            <div className="completed-tasks">
                <h3>Tarefas Concluídas</h3>
                <div className="task-list">
                    {tasks
                        .filter((task) => task.concluida)
                        .map((task) => (
                            <p key={task.id}>{task.titulo}</p>
                        ))}
                </div>
            </div>
        </div>
    );
}

export default Task;
