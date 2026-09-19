import { FiLogOut } from "react-icons/fi";
import CustomButton from "./CustomButton";
import { useNavigate } from "react-router";

import "./Sidebar.scss";

const Sidebar = () => {
    const navigate = useNavigate();

    function handleLogout() {
        // ainda não existe autenticação de verdade — isso entra aqui
        // quando a API tiver o endpoint de logout
        navigate("/login");
    }
    return (
        <aside className="sidebar-container">
            <div className="sidebar-footer">
                <CustomButton onclick={handleLogout}>
                    <FiLogOut size={16} />
                    <span className="sidebar-button-label">Sair</span>
                </CustomButton>
            </div>
        </aside>
    );
};

export default Sidebar;
