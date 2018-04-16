import React, {Component} from "react";
import { Link } from "react-router-dom";
import logo from "../../images/boomtown-logo.svg";
import AppBar from 'material-ui/AppBar';
import RaisedButton from "material-ui/RaisedButton";
import "./styles.css";

const HeaderBar = () => (
  <AppBar
    iconElementLeft={
      <img src={logo} alt="boomtown logo" />
      }
    iconElementRight={
      <RaisedButton label="Primary" primary={true}/>
    }
  />
)

export default HeaderBar;