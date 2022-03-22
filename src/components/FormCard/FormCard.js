import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GET_CARDS } from "../../store/actions/actions";
import "./FormCard.css";

const FormCard = ({ overlay, setHide }) => {
  const dispatch = useDispatch();

  const cardsInfo = useSelector((state) => state.cardData);
  
  const [inputData, setInputData] = useState({
    headline: "",
    description: "",
    id: Math.random(),
    img: require("../../assets/img/spring-framework.svg").default,
  });

  useEffect(() => {
    return () => {
      setHide(!overlay);
    };
  }, [cardsInfo]);

  function onChangeHeadline(e) {
    setInputData({ ...inputData, headline: e.target.value });
  }

  function onChangeDescription(e) {
    setInputData({ ...inputData, description: e.target.value });
  }

  function addCard(e) {
    e.preventDefault();
    dispatch({ type: GET_CARDS, payload: inputData });
  }

  return (
    <>
      <div className="form-wrapper">
        <h3>Добавьте новую карточку</h3>
        <form onSubmit={addCard} className="form">
          <input
            placeholder="Заголовок"
            type="text"
            name="headline"
            onChange={onChangeHeadline}
          ></input>
          <textarea
            onChange={onChangeDescription}
            type="text"
            name="description"
            placeholder="Описание"
          ></textarea>
          <button type="submit">Добавить карточку</button>
        </form>
      </div>
      <div onClick={() => setHide(!overlay)} className="overlay"></div>
    </>
  );
};

export default FormCard;
