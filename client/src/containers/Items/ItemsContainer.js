import React, { Component } from "react";
import Items from "./Items";

class ItemsContainer extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: false,
      itemsData: []
    };
  }

  componentDidMount() {
    // fetch JSON data and attach to state
    const urls = ["http://localhost:3000/items", "http://localhost:3000/users"];

    this.setState({ isLoading: true });

    let items = [];
    let user = [];

    Promise.all(urls.map(url => fetch(url)
    .then(resp => resp.json())))
    .then(arrayObj => {
        // console.log(arrayObj);
        items = arrayObj[0];
        user = arrayObj[1];
        items.map(item =>{
        user.map(profile => {
            if(profile.id === item.itemowner) {
            item.itemowner = profile;
                }
            });
        });
        this.setState({ itemsData: arrayObj[0] });
        console.log(this.state.itemsData);
      }
    );
  }

  render() {
    return (
      <div>
        <Items itemsData={this.state.itemsData}/>
      </div>
    );
  }
}

export default ItemsContainer;
