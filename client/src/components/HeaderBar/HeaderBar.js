import React, {Component} from "react";
import { Link } from "react-router-dom";
import logo from "../../images/boomtown-logo.svg";
import AppBar from 'material-ui/AppBar';
import SelectField from "material-ui/SelectField";
import MenuItem from "material-ui/MenuItem";
import RaisedButton from "material-ui/RaisedButton";
import {grey900} from 'material-ui/styles/colors';
import "./styles.css";

const HeaderBar = () => (
  <AppBar style={{display: "flex", alignItems: "center"}}
    iconElementLeft={
      <div className="logo-filter-container">
        <img src={logo} className="logoImage" alt="Boomtown Logo" />
        <SelectField>
          <MenuItem value={2} primaryText="Electronics" />
          <MenuItem value={3} primaryText="Household Items" />
          <MenuItem value={4} primaryText="Musical Instruments" />
          <MenuItem value={5} primaryText="Physical Media" />
          <MenuItem value={6} primaryText="Recreational Equipment" />
          <MenuItem value={7} primaryText="Sporting Goods" />
          <MenuItem value={8} primaryText="Tools" />
        </SelectField>
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

export default HeaderBar;