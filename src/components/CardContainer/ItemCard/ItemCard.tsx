import React from 'react'
import { RiSendPlaneFill } from "react-icons/ri";
import "./ItemCard.scss";

const ItemCard: React.FC<ItemCard> = ({ image, name, company, price, availableAt, contact }) => {
    return (
        <div className="item-card">
            <div className="image-container">
                <img src={image} alt="" />
            </div>
            <h6>{name}</h6>
            <h3>{`Rs ${price} / `}<span>stripe</span></h3>
            <div className="company">
                <h6>{company}</h6>
                <span>{availableAt}</span>
            </div>
            <a className="contact" href={`https://wa.me/+91${contact}`}>
                <RiSendPlaneFill size={27} />
                <h3>Contact Supplier</h3>
            </a>
            <div className="bottom"></div>
        </div >
    )
}

export default ItemCard