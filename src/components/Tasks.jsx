import { useState, useEffect, useMemo } from "react";
import axios from "axios";
import toast from "react-hot-toast";

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
            setTask(data); // atualiza o (ESTADO) com as tarefas recebidas da API
        } catch (_error) {
            toast.error("Erro ao buscar tarefas!"); // exibe uma notificação de erro caso a requisição falhe
        }
    };

    // useMemo para memorizar o resultado da filtragem das tarefas não concluídas, evitando recalcular a cada renderização
    // é chamado sempre que o estado "tasks" mudar. exemplo: adição de nova tarefa, garantindo que a lista de tarefas seja atualizada corretamente
    const lastTasks = useMemo(() => {
        // filtra as tarefas não concluídas e retorna
        return tasks.filter((task) => !task.concluida);
    }, [tasks]);

    const completedTasks = useMemo(() => {
        // filtra as tarefas concluídas e retorna
        return tasks.filter((task) => task.concluida);
    }, [tasks]);

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
                <AddTask getTasks={fetchTasks} />
                <div className="task-list">
                    {lastTasks.map((lastTask) => (
                        <TaskItem
                            key={lastTask.id}
                            task={lastTask}
                            fetchTasks={fetchTasks}
                        /> // renderiza o componente TaskItem para cada tarefa não concluída
                    ))}
                </div>
            </div>

            <div className="completed-tasks">
                <h3>Tarefas Concluídas</h3>
                <div className="task-list">
                    {completedTasks.map((completedTask) => (
                        <TaskItem
                            key={completedTask.id}
                            task={completedTask}
                            fetchTasks={fetchTasks}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Task;
