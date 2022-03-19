import React, { useState } from "react";
import FormCard from "../FormCard/FormCard";
import "./AddNewCard.css";

const AddNewCard = () => {
  const [popUpMenu, setPopUpMenu] = useState(false);

  return (
    <>
      <div className="container">
        <button onClick={() => setPopUpMenu(!popUpMenu)} className="btn-style">
          Add New Card
        </button>
        </div>
      {popUpMenu && <FormCard setHide={setPopUpMenu} overlay={popUpMenu}/>}
    </>
  );
};

export default AddNewCard;
