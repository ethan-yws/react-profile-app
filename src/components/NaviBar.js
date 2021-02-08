import React from 'react';
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import "../styles/NaviBar.css";

function NaviBar() {
    return (
      <div className="navi-bar">
        <IconButton>
          <ArrowBackIosIcon className="bar-icon">Previous</ArrowBackIosIcon>
        </IconButton>

        <IconButton>
          <ArrowForwardIosIcon className="bar-icon">Next</ArrowForwardIosIcon>
        </IconButton>
      </div>
    );
}

export default NaviBar
