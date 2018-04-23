import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Profile from './Profile';
import ItemCardList from '../../components/ItemCardList';
import { fetchProfileItemsFromUrl } from '../../redux/modules/profile';
import './styles.css';

class ProfileContainer extends Component {
    componentDidMount() {
        this.props.dispatch(
            fetchProfileItemsFromUrl(this.props.match.params.itemownerId)
        );
    }

    render() {
        return (
            <div>
                <div className="profileContainer">
                    <Profile
                        profileInfo={this.props.location.state}
                        itemInfo={this.props.itemsData.profileItems}
                    />
                </div>
                <ItemCardList itemsData={this.props.itemsData.profileItems} />
                )
            </div>
        );
    }
}

ProfileContainer.defaultProps = {
    match: {}
};

export default connect(state => ({
    itemsData: state.profileItems
}))(ProfileContainer);
