import React from 'react';
import PropTypes from 'prop-types';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import Gravatar from 'react-gravatar';
import { Link } from 'react-router-dom';
import "./styles.css";

const ItemCard = props => {
    const item = props.itemsData;
    return (
        <Card>
            <CardMedia>
                <img src={item.imageurl} alt="" />
            </CardMedia>
            <Link to={`/profile/${item.itemowner.id}`}>
            <CardHeader
                className="itemCardGravatarImage"
                avatar={<Gravatar email={item.itemowner.email} />}
                title={item.itemowner.fullname}
            />
            </Link>
            <CardTitle title = {item.title} />
            <CardText>
                {item.description}
            </CardText>
            <CardActions>
                <RaisedButton label="Borrow" secondary={true} />
            </CardActions>
        </Card>
    )
}

export default ItemCard;