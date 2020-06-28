// jsx, component, props
import React from 'react';
import PropTypes from "prop-types";

const foodILike = [{
  id : 1,
  name : "asdf",
  image : "https://adkjakdjfkadjfdkjf",
}];

function Food(props) {
  return <div><h1>I like {props.name}</h1>
    <h4>rating : {props.rating}</h4>
    <span><img src={props.picture} alt="test"/></span>
    </div>;
}

Food.propTypes= {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
};

function App() {
  return (
    <div>
      <h1>GHello</h1>
      {foodILike.map(dish => (<Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating} />))}
    </div>
  ); 
}

export default App;