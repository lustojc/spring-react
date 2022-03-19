import React, { useEffect, useState } from "react";
import "./cards.css";
import "../../App.css";
import Loader from "../common/Loader/Loader";
import { useSelector } from "react-redux";

const Cards = ({ valueInput }) => {
  const cardsInfo = useSelector((state) => state.cardData);

  let notFound = false;
  const renderCard = cardsInfo
    .filter((card) => {
      if (valueInput === "") {
        notFound = true;
        return card;
      } else if (
        card.headline.toLowerCase().includes(valueInput.toLowerCase())
      ) {
        notFound = true;
        return card;
      }
    })
    .map((el, index) => {
      return (
        <a key={index} className="card-item dp-flex jc-betw" href="#">
          <div className="card-logo">
            <img src={el.img} alt={el.headline}></img>
          </div>
          <div className="card-info">
            <h3 className="card-title">{el.headline}</h3>
            <p className="card-text">{el.description}</p>
          </div>
        </a>
      );
    });

  const [displayMessage, setDisplayMessage] = useState(renderCard);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    const timeOutId = setTimeout(() => {
      setLoader(true);
      setDisplayMessage(renderCard);
    }, 400);
    return () => {
      setLoader(false);
      clearTimeout(timeOutId);
    };
  }, [valueInput, cardsInfo]);

  return (
    <div>
      {!notFound ? (
        <div className="card-wrapper dp-flex jc-center">
          <div className="nt-message">There are no items!</div>
        </div>
      ) : (
        <div className="card-wrapper dp-flex jc-betw">
          {loader ? (
            displayMessage
          ) : (
            <div className="card-wrapper dp-flex jc-center">
              <Loader />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Cards;
