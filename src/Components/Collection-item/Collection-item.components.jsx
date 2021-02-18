import React from "react";
import CustomButton from "../Custom-button/custom-button.components";
import "./Collection-item.styles.scss";

const CollectionItem = ({ id, name, imageUrl, price }) => (
  <div className="collection-item">
    <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
    <div className="collection-footer">
      <span className="name">{name}</span>
      <span className="price">{price}</span>
    </div>
    <CustomButton className="custom-button">Add To Cart</CustomButton>
  </div>
);

export default CollectionItem;
