import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardTitle, CardText } from 'material-ui/Card';

const Profile = props => (
    <Card>
        <CardText style={{ width: '1000px', margin: '0 auto' }}>
            <CardTitle title={props.itemInfo.length} subtitle="Items Shared" />
            <CardTitle title={'0'} subtitle={'Items Borrowed'} />
        </CardText>
    </Card>
);

Profile.propTypes = {
    itemInfo: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default Profile;
