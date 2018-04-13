import React, { Component } from 'react';
import PropTypes from "prop-types";
import ItemCardList from "../../components/ItemCardList";

const Items = props => {
  return (
    <div>
      <ItemCardList itemsData={props.itemsData}/>
    </div>
  )
};

export default Items;