import { useState } from "react";
import { FiLogIn } from "react-icons/fi";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";

import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";

import "./Login.scss";

const Login = () => {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const navigate = useNavigate();

    function handleEntrar() {
        if (email.trim().length === 0) {
            return toast.error("Digite seu e-mail!");
        }

        if (senha.trim().length === 0) {
            return toast.error("Digite sua senha!");
        }

        // ainda não existe autenticação de verdade — isso entra aqui
        // quando a API tiver o endpoint de login
        toast.success("Bem-vindo de volta!");
        navigate("/");
    }

    return (
        <div className="login-container">
            <div className="login-card">
                <div className="login-header">
                    <h1>Bem-vindo de volta</h1>
                    <p>Entre para ver as suas tarefas</p>
                </div>

                <div className="login-form">
                    <CustomInput
                        label="E-mail"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        onEnterPress={handleEntrar}
                    />

                    <CustomInput
                        label="Senha"
                        type="password"
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                        onEnterPress={handleEntrar}
                    />

                    <CustomButton onclick={handleEntrar}>
                        <FiLogIn size={16} />
                        Entrar
                    </CustomButton>
                </div>

                <p className="login-rodape">
                    Ainda não tem conta? <span>Criar agora</span>
                </p>
            </div>
        </div>
    );
};

export default Login;
