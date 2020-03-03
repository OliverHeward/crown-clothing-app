import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectDirectorySections } from "../../redux/directory/selectors";

import MenuItem from "../MenuItem/MenuItem";

import "./Directory.scss";

const Directory = ({ sections }) => (
  <div className="directory-menu">
    {/* Array deconstruction using spread, assigns key+value pairs */}
    {sections.map(({ id, ...sectionProps }) => (
      <MenuItem key={id} {...sectionProps}></MenuItem>
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
});

export default connect(mapStateToProps)(Directory);
