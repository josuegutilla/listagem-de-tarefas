import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import toast from "react-hot-toast";
import axios from "axios";

import CustomInput from "./CustomInput";
import CustomButton from "./CustomButton";

import "./AddTask.scss";

const AddTask = () => {
    const [task, setTask] = useState("");

    function onChange(e) {
        setTask(e.target.value);
    }

    async function handleAddTask() {
        try {
            if (task.length === 0) {
                return toast.error("Digite uma tarefa!");
            }

            await axios.post("http://localhost:5220/api/tarefas", {
                titulo: task,
            });

            toast.success("Tarefa adicionada com sucesso!");
        } catch (error) {
            console.log(error);
            toast.error("Erro ao adicionar tarefa!");
        }
    }

    return (
        <div className="add-task-container">
            <CustomInput
                label="Adicionar tarefa..."
                value={task}
                onChange={onChange}
            />

            <CustomButton onclick={handleAddTask}>
                <FaPlus size={14} color="#fff" className="add-icon" />
            </CustomButton>
        </div>
    );
};

export default AddTask;
