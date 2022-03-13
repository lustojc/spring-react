import React, { useEffect, useState } from "react";
import Cards from "../Cards/Cards";
import Input from "../UI/Input";
import "./main.css";

const MainSection = () => {


  const [value, setValue] = useState("");

  return (
    <section>
      <div className="card">
        <Input value={value} setValue={setValue} />
         <Cards valueInput={value} setValue={setValue} />
      </div>
    </section>
  );
};

export default MainSection;
