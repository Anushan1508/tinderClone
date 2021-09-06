import React from "react";
import "./Header.css";
import PersonIcon from "@material-ui/icons/Person";
import { IconButton } from "@material-ui/core";
import tinderLogo from "../../images/tinderLogo.png";
import ForumeIcon from "@material-ui/icons/Forum";

const Header = () => {
  return (
    <div className="header">
      <IconButton>
        <PersonIcon fontSize="large" className="header__icon" />
      </IconButton>

      <img className="header__logo" src={tinderLogo} alt="" />

      <IconButton>
        <ForumeIcon fontSize="large" className="header__icon" />
      </IconButton>
    </div>
  );
};

export default Header;
