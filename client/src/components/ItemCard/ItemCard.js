import React from 'react';
import PropTypes from 'prop-types';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import {Link} from 'react-router-dom';

const ItemCard = props => {
    const item = props.itemsData;
    return (
        <Card>
            <Link to={ { pathname: `/profile/${item.itemowner.id}`, state: {bio: item.itemowner.bio, email: item.itemowner.email, fullname: item.itemowner.fullname} }  }>
                <CardHeader title={item.itemowner.fullname} subtitle="A person" avatar=""/>
            </Link>
                <CardTitle title = {item.title} />
        </Card>
    )
}

export default ItemCard;