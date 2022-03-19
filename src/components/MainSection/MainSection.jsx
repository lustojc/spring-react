import React, { useEffect, useState } from "react";
import AddNewCard from "../AddNewCard/AddNewCard";
import Cards from "../Cards/Cards";
import Input from "../common/Input/Input";
import "./main.css";

const MainSection = () => {
  const [value, setValue] = useState("");

  return (
    <section>
      <div className="card">
        <Input value={value} setValue={setValue} />
        <AddNewCard />
        <Cards valueInput={value} setValue={setValue} />
      </div>
    </section>
  );
};

export default MainSection;
