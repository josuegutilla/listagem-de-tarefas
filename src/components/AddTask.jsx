import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import toast from "react-hot-toast";
import axios from "axios";

import CustomInput from "./CustomInput";
import CustomButton from "./CustomButton";

import "./AddTask.scss";

const AddTask = ({ getTasks }) => {
    const [task, setTask] = useState("");

    // função para atualizar o estado da tarefa conforme o usuário digita no input
    function onChange(e) {
        setTask(e.target.value);
    }

    // função assíncrona para lidar com a adição de uma nova tarefa
    async function handleAddTask() {
        try {
            // verifica se o campo de tarefa está vazio
            if (task.length === 0) {
                return toast.error("Digite uma tarefa!");
            }

            // faz uma requisição POST para a API para adicionar a nova tarefa
            await axios.post("http://localhost:5220/api/tarefas", {
                titulo: task,
            });

            getTasks(); // atualiza a lista de tarefas
            setTask(""); // limpa o input
            toast.success("Tarefa adicionada com sucesso!");
        } catch {
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
