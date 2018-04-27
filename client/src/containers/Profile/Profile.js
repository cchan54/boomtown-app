import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardTitle } from 'material-ui/Card';

const Profile = ({ profileData }) => (
    <Card>
        <CardTitle
            title={profileData.owneditems.length}
            subtitle="Items Shared"
        />

        <CardTitle
            title={profileData.borroweditems.length}
            subtitle={'Items Borrowed'}
        />
    </Card>
);

export default Profile;
