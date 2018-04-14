import React from 'react';
import PropTypes from 'prop-types';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Gravatar from 'react-gravatar';
import { Link } from 'react-router-dom';

// const buttonStyle = {
//     backgroundColor: "black",
//     color: "white",
//     fontSize: "14px"
// }

const ItemCard = props => {
    const item = props.itemsData;
    return (
        <Card>
            <CardMedia>
                <img src={item.imageurl} alt="" />
            </CardMedia>
            <Link to={ { pathname: `/profile/${item.itemowner.id}`, state: {bio: item.itemowner.bio, email: item.itemowner.email, fullname: item.itemowner.fullname} }  }>
                <CardHeader title={item.itemowner.fullname} avatar=""/>
            </Link>
            <CardTitle title = {item.title} />
            <CardText>
                {item.description}
            </CardText>
            <CardActions>
                <FlatButton label="Borrow" />
            </CardActions>
        </Card>
    )
}

export default ItemCard;