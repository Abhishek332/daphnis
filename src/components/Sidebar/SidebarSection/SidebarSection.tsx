import "./SidebarSection.scss";
import { MdOutlineCancel } from "react-icons/md";
import { SetStateAction } from "react";
import { useState } from "react";

const SidebarSection: React.FC<sidebarSection> = ({ heading, options }) => {
    const [selectedOption, setSelectedOption] = useState<string[]>(["paracetamol syrup",
        "megladrane simethicone"]);

    const Selector = (e: any) => {
        // used event delegation here
        let value = e.target.innerText.toLowerCase();
        if (!selectedOption.includes(value)) {
            setSelectedOption([...selectedOption, value]);
            return;
        }
        setSelectedOption(selectedOption.filter((option) => option !== value));
    }

    return (
        <div className="sidebar-section" onClick={Selector}>
            <h4 className="heading">{heading}</h4>
            {
                options.map((optionName, i) => <SidebarOption key={`sidebarOption-${i}`} name={optionName} isSelected={selectedOption.includes(optionName.toLowerCase())} />)
            }
        </div>
    )
}

export default SidebarSection

const SidebarOption: React.FC<SidebarProps> = ({ name, isSelected = false }) => {
    return <div
        className="option"
        style={isSelected
            ? { backgroundColor: "#32b8ad", color: "white" }
            : { color: "black" }}
    >
        <p>{name}</p>
        {
            isSelected && <MdOutlineCancel size={16} />
        }
    </div>
}

interface SidebarProps {
    name: string;
    isSelected: boolean;
}