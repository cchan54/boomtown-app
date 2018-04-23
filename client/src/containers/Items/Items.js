import React from 'react';
import PropTypes from 'prop-types';
import ItemCardList from '../../components/ItemCardList';
import './styles.css';

const Items = props => (
    <div className="itemsListCardWrapper">
        <ItemCardList itemsData={props.itemsData} />
    </div>
);

export default Items;

Items.propTypes = {
    itemsData: PropTypes.arrayOf(PropTypes.object).isRequired
};
