import { useState, useEffect } from "react";
import axios from "axios";

// import TaskItem from "./components/TaskItem";
import "./App.scss";

function App() {
    const [tasks, setTask] = useState([
        {
            id: 1,
            titulo: "Curso Java",
            descricao: "Estudando para se tornar um dev fullstack Java!!!",
            concluida: false,
            criadaEm: "2026-09-18T02:11:53.463282Z",
            concluidaEm: null,
        },
        {
            id: 2,
            titulo: "Curso Angular",
            descricao:
                "Estudando para se tornar um dev fullstack Java + Angular!!!",
            concluida: false,
            criadaEm: "2026-09-18T02:11:53.463282Z",
            concluidaEm: null,
        },
    ]);

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
        <>
            <div>
                {tasks.map((task) => (
                    <div key={task.id}>
                        <h1>{task.titulo}</h1>
                        <p>{task.descricao}</p>
                    </div>
                ))}
            </div>
        </>
    );
}
export default App;
