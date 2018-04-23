import React, { Component } from 'react';
import { connect } from 'react-redux';
import Items from './Items';
import { fetchItemsAndUsers } from '../../redux/modules/items';

class ItemsContainer extends Component {
    componentDidMount() {
        this.props.dispatch(fetchItemsAndUsers());
    }

    filterItems = itemsData => {
        if (itemsData.itemFilters.length > 0) {
            const filteredItems = itemsData.items.filter(item => {
                return item.tags.filter(tag =>
                    itemsData.itemFilters.find(filter => filter === tag)
                ).length;
            });
            return filteredItems;
        }
        return itemsData.items;
    };

    render() {
        return this.props.itemsData.isLoading ? (
            <p>Loading...</p>
        ) : (
            <Items itemsData={this.filterItems(this.props.itemsData)} />
        );
    }
}

export default connect(state => {
    return {
        itemsData: state.itemsData
    };
})(ItemsContainer);
