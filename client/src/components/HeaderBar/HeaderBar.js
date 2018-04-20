import React, {Component} from "react";
import { Link } from "react-router-dom";
import logo from "../../images/boomtown-logo.svg";
import AppBar from 'material-ui/AppBar';
import TagFilterField from "../TagFilterField";
import RaisedButton from "material-ui/RaisedButton";
import {grey900} from 'material-ui/styles/colors';
import "./styles.css";
import { connect } from "react-redux";
import { fetchItemsAndUsers } from "../../redux/modules/items";

class HeaderBar extends Component {
  componentDidMount() {
    const urls = ["http://localhost:3000/items", "http://localhost:3000/users",];
    this.props.dispatch(fetchItemsAndUsers(urls));
  }

  getTags = items => {
    let tags = [];
    if (items.length && items[0] !== undefined) {
      items.map(item => {
        if (item.tags !== undefined) {
          if (!item.tags.includes(undefined)) {
            item.tags.map(tag => {
              if (!tags.includes(tag)) {
                tags.push(tag);
              }
            });
          }
        }
      });
    }
    return tags;
  };


render() {
  const tags = this.getTags(this.props.itemsData.items);
  console.log(tags);
  return(
    <AppBar style={{display: "flex", alignItems: "center"}}
    iconElementLeft={
      <div className="logo-filter-container">
        <img src={logo} className="logoImage" alt="Boomtown Logo" />
        {tags.length &&  <TagFilterField tags={tags} />}
      </div>
    }

    titleStyle={{
      display: "none",
    }}
    
    iconElementRight={
      <div className="header-button-container">
        <RaisedButton label="My Profile" primary={true} className="appBarButton1" />
        <RaisedButton label="Logout" secondary={true} className="appBarButton2" />
      </div>
    }
    style={{
      backgroundColor: 'white',
      fontFamily: 'Roboto, sans-serif'
    }}
  />
  )
  }
}

const mapStateToProps = state => {
  return {
    itemsData: state.itemsData
  };
};

export default connect(mapStateToProps)(HeaderBar);