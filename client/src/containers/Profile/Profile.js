import React from "react";
import PropTypes from "prop-types";
import { Card } from "material-ui/Card";

import Items from "../Items/Items";

const Profile = ({ Items }) => {
  return (
    <Card style={{ maxWidth: '800px', margin: '0 auto' }}>
      <h1>Profile</h1>
    </Card>
  )
}

export default Profile;