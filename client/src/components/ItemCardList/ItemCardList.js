import React from "react";
import PropTypes from "prop-types";
import ItemCard from "../ItemCard";

const ItemCardList = props => {
    return (
        <ul>
            {props.itemsData.map((item, index) => (
            <li key={index}>
                <ItemCard itemsData={item}/>
            </li>
            )
        )
    }
        </ul>
    )
}

export default ItemCardList;