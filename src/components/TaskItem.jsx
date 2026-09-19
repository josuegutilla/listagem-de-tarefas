import { AiFillDelete } from "react-icons/ai";
import "./TaskItem.scss";

const TaskItem = ({ task }) => {
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
                />
            </div>
        </div>
    );
};

export default TaskItem;
