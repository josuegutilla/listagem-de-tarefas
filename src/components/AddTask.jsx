import { useState } from "react";
import "./AddTask.scss";

import CustomInput from "./CustomInput";
import CustomButton from "./CustomButton";

const AddTask = () => {
    const [task, setTask] = useState("");

    function onChange(e) {
        setTask(e.target.value);
    }

    return (
        <div className="add-task-container">
            <CustomInput
                label="Adicionar tarefa..."
                value={task}
                onChange={onChange}
            />

            <CustomButton onclick={() => console.log("clicou")}>
                clicar
            </CustomButton>
        </div>
    );
};

export default AddTask;
