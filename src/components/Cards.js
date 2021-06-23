import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div className="cards">
      <h1>Check out these EPIC Festivals!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="/images/baisakhi.jpg"
              text=" India is the country where most numbers of festivals celebrated in the whole world"
              label="Festivals"
              path="/services"
            />
            <CardItem
              src="/images/durgapuja.jpg"
              /*src={"images/durgapuja.jpg"}*/
              text="Festivals from different religions reflect different customs and traditions of that religion."
              label="Festivals"
              path="/sign-up"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/ganesha.jpg"
              text="Festivals bring a moment of Joy in our life and make us to be together to celebrate."
              label="Festivals"
              path="/sign-up"
            />
            <CardItem
              src="images/holi.jpg"
              text="The cultural festivals help people to understand the value of their religions and respect the others."
              label="Festivals"
              path="/sign-up"
            />
            <CardItem
              src="images/fiesta.jpg"
              text="The greatness and charm of festivals in India cannot be described but can only be felt."
              label="Festivals"
              path="/sign-up"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
