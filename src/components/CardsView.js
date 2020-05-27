import React from "react";
import PropTypes from "prop-types";

const CardsView = (props) => {
  return (
    <div className="cards">
      {props.cards.map((card, i) => (
        <div key={i} className="card">
          <p className="name">{card.name}</p>
          <span className="color">{card.color}</span>
          <img src={card.img} alt={card.img} className='cardImg'></img>
          <div className="cardDesc">
            <span className="price">{`$${card.price}`}</span>
            <button className="addButton">add to cart</button>
          </div>
        </div>
      ))}
    </div>
  );
};

CardsView.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
    })
  ),
};

export default CardsView;
