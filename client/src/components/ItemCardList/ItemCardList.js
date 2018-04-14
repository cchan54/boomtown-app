import React from "react";
import PropTypes from "prop-types";
import ItemCard from "../ItemCard";
import Masonry from 'react-masonry-component';
import "./styles.css";

const ItemCardList = props => {
    return (
        <Masonry>
            {props.itemsData.map((item, index) => (
            <div className="itemsCardWrapper" key={index}>
                <ItemCard itemsData={item}/>
            </div>
            )
        )
    }
        </Masonry>
    )
}

export default ItemCardList;