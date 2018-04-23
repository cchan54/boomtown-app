import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardTitle } from 'material-ui/Card';

const Profile = props => (
    <Card>
        <CardTitle style={{ width: '1000px', margin: '0 auto' }}>
            <CardTitle title={props.itemInfo.length} subtitle="Items Shared" />
            <CardTitle title={'0'} subtitle={'Items Borrowed'} />
        </CardTitle>
    </Card>
);

Profile.propTypes = {
    itemInfo: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default Profile;
