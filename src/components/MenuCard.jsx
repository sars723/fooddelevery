import { ChevronRightRounded } from "@mui/icons-material";
import React from "react";

const MenuCard = ({ imgSrc, name, isActive }) => {
  return (
    <div className={isActive ? "active rowMenuCard" : "rowMenuCard"}>
      <div className="imgBox">
        <img src={imgSrc} alt="" />
      </div>
      <h3>{name}</h3>
      <i className="loadMenu">
        <ChevronRightRounded />
      </i>
    </div>
  );
};

export default MenuCard;
