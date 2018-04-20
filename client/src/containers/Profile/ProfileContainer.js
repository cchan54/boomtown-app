import React from "react";
import Profile from './Profile';
import propTypes from "prop-types";
import { connect } from "react-redux";
import { fetchItemsAndUsers } from "../../redux/modules/items";

const ProfileContainer = props => {
  // const { user } = props.data;

  return <h1>profile</h1>
  //   <Profile items={user.shareditems} user={user} />
  // );
};

export default ProfileContainer;