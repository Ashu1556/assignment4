import React, { useState, useEffect } from "react";

import "./practise.css";

const Practise = () => {
  const [state, setState] = useState([]);

  const apidata = async () => {
    const data = await fetch(`https://jsonplaceholder.typicode.com/users`);
    const data1 = await data.json();
    setState(data1);
    console.log(data1);
  };

  useEffect(() => {
    apidata();
  }, []);

  return (
    <div className="main_container">
      <div>
        {state.map((item, i) => (
          <p key={i}>
            id:{item.id}, Name:{item.name} and Email:{item.email}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Practise;
