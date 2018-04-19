import React, { Component } from "react";
import Items from "./Items";
import ItemCard from "../../components/ItemCard";
import { connect } from "react-redux";
import { fetchItemsAndUsers } from "../../redux/modules/items";

class ItemsContainer extends Component {
  componentDidMount() {
    this.props.dispatch(fetchItemsAndUsers());
  }

  render() {
    return (       
      (this.props.items) ? 
        <Items itemsData={this.props.items}/>
        : <p>Loading...</p>
    );
  }
}

export default connect(state => {
  return {
    items: state.items.items
  }
})(ItemsContainer);