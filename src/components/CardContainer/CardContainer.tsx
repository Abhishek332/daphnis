import "./CardContainer.scss";
import ItemCard from "./ItemCard/ItemCard";

const CardContainer: React.FC<CardContainerProps> = ({ data }) => {
    return (
        <div className="card-container">
            {
                data.map((itemCardData, i) => <ItemCard key={`itemCard-${i}`} {...itemCardData} />)
            }
        </div>
    )
}

export default CardContainer

interface CardContainerProps {
    data: ItemCard[]
}