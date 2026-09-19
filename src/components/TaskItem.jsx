import { AiFillDelete } from "react-icons/ai"; // biblioteca para ícones do React
import axios from "axios"; // biblioteca para fazer requisições HTTP
import toast from "react-hot-toast"; // biblioteca para exibir notificações (toasts)

import "./TaskItem.scss";

const TaskItem = ({ task, fetchTasks }) => {
    const handleDeleteTask = async (task) => {
        // Lógica para deletar a tarefa
        try {
            await axios.delete(`http://localhost:5220/api/tarefas/${task.id}`);

            // Atualiza a lista de tarefas após deletar
            fetchTasks();
            toast.success("Tarefa deletada com sucesso!");
        } catch {
            toast.error("Erro ao deletar tarefa!");
        }
    };

    const handleToggleTask = async (task) => {
        try {
            await axios.patch(
                `http://localhost:5220/api/tarefas/${task.id}/concluir`,
            );

            fetchTasks();
            toast.success(
                `Tarefa ${task.concluida ? "marcada como não concluída" : "concluída"} com sucesso!`,
            );
        } catch {
            toast.error("Erro ao atualizar tarefa!");
        }
    };

    return (
        <div className="task-item-container">
            <div className="task-description">
                <label
                    className={
                        task.concluida
                            ? "checkbox-container-completed"
                            : "checkbox-container"
                    }
                >
                    {task.titulo}
                    <input
                        type="checkbox"
                        defaultChecked={task.concluida}
                        onChange={() => handleToggleTask(task)}
                    />
                    <span
                        className={
                            task.concluida ? "checkmark-completed" : "checkmark"
                        }
                    ></span>
                </label>
            </div>

            <div className="delete">
                <AiFillDelete
                    size={18}
                    color="#f97474"
                    className="delete-icon"
                    onClick={() => handleDeleteTask(task)} // passa a função handleDeleteTask como prop para o ícone de deletar, permitindo que ele seja chamado quando o ícone for clicado
                />
            </div>
        </div>
    );
};

export default TaskItem;
