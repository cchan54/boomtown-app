import React from "react";
import Proptypes from "prop-types";
import { connect } from "react-redux";
import { get_itemFilters } from "../../redux/modules/items";
import SelectField from 'material-ui/SelectField';
import MenuItem from "material-ui/MenuItem";

const TagFilterField = ({tags, dispatch}) => {
  function handleFilter(value) {
    dispatch(get_itemFilters(value));
  }

  return (
    <SelectField
      multiple
      hintText="Filter by Tag"
      onChange={(event, index, value) => handleFilter(value[0])}
    >

      {tags &&
        tags.map((tag, index) => (
          <MenuItem
          key={index}
          value={tag}
          primaryText={tag}
          />
      ))}
    </SelectField>
  );
};

export default connect()(TagFilterField);