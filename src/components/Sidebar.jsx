import { FiLogOut } from "react-icons/fi";
import CustomButton from "./CustomButton";

import "./Sidebar.scss";

const Sidebar = () => {
    return (
        <aside className="sidebar-container">
            <div className="sidebar-footer">
                <CustomButton>
                    <FiLogOut size={16} />
                    <span className="sidebar-button-label">Sair</span>
                </CustomButton>
            </div>
        </aside>
    );
};

export default Sidebar;
