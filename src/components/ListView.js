import React from "react";
import PropTypes from "prop-types";

const ListView = (props) => {
  return (
    <ul className="list">
      {props.cards.map((card, index) => (
        <li key={index}>
          <img src={card.img} className="img" alt={index}></img>
          <p className="name">{card.name}</p>
          <span className="color">{card.color}</span>
          <span className="price">{`$${card.price}`}</span>
          <button className="addButton">ADD TO CHART</button>
        </li>
      ))}
    </ul>
  );
};

ListView.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
    })
  ),
};

export default ListView;
