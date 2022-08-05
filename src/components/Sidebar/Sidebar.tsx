import "./Sidebar.scss";
import { sidebarSections } from "../../data/sidebarSections";
import SidebarSection from "./SidebarSection/SidebarSection";

const Sidebar = () => {
    return (
        <div className="sidebar">
            {
                sidebarSections.map((sidebarSection, i) => <SidebarSection key={`sidebar-section-${i + 1}`} {...sidebarSection} />)
            }
        </div>
    )
}

export default Sidebar