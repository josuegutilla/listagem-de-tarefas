import { AiFillDelete } from "react-icons/ai";
import axios from "axios";

import "./TaskItem.scss";

const TaskItem = ({ task }) => {
    const handleDeleteTask = async (task) => {
        // Lógica para deletar a tarefa
        try {
            const response = await axios.delete(
                `http://localhost:5220/api/tarefas/${task.id}`,
            );
            console.log(response); // exibe a resposta da API no console
            // Atualiza a lista de tarefas após deletar
            fetchTasks();
            toast.success("Tarefa deletada com sucesso!");
        } catch (error) {
            toast.error("Erro ao deletar tarefa!");
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
                    <input type="checkbox" defaultChecked={task.concluida} />
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
