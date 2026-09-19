import { useState, useEffect } from "react";
import axios from "axios";

import "./Tasks.scss";

import TaskItem from "./TaskItem";
import AddTask from "./AddTask";

function Task() {
    const [tasks, setTask] = useState([]);

    const fetchTasks = async () => {
        try {
            // faz uma requisição GET para a API para buscar as tarefas
            const { data } = await axios.get(
                "http://localhost:5220/api/tarefas",
            );
            setTask(data); // atualiza o estado com as tarefas recebidas da API
        } catch (error) {
            console.log(error);
        }
    };

    // useEffect para buscar as tarefas ao montar o componente
    useEffect(() => {
        fetchTasks(); // busca as tarefas ao montar o componente
    }, []);

    return (
        <div className="tasks-container">
            <h2>Minhas Tarefas</h2>

            <div className="last-tasks">
                <h3>Últimas Tarefas</h3>
                {/* passa a função fetchTasks como prop para o componente AddTask, permitindo que ele atualize a lista de tarefas após adicionar uma nova tarefa */}
                <AddTask getTasks={fetchTasks} />{" "}
                <div className="task-list">
                    {tasks // filtra as tarefas não concluídas e mapeia para renderizar o componente TaskItem
                        .filter((task) => task.concluida === false)
                        .map((lastTask) => (
                            <TaskItem key={lastTask.id} task={lastTask} /> // renderiza o componente TaskItem para cada tarefa não concluída
                        ))}
                </div>
            </div>

            <div className="completed-tasks">
                <h3>Tarefas Concluídas</h3>
                <div className="task-list">
                    {tasks
                        .filter((task) => task.concluida)
                        .map((completedTask) => (
                            <TaskItem
                                key={completedTask.id}
                                task={completedTask}
                            />
                        ))}
                </div>
            </div>
        </div>
    );
}

export default Task;
