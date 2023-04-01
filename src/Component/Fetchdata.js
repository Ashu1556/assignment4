import React, { useState, useEffect } from "react";
import Card from "./Card";
import "./fetchdata.css";

const Fetchdata = () => {
  const [state, setState] = useState([]);
  const [inputset, setInputset] = useState("");

  const [state1, setState1] = useState([]);
  const [inputset2, setInputset2] = useState("");
  const [state2, setState2] = useState([]);

  useEffect(() => {
    async function fetchdata() {
      const newdata = await fetch(`https://api.github.com/users`);
      const data1 = await newdata.json();
      setState(data1);
      setInputset("30");
      setState1(data1);
    }

    fetchdata();
  }, []);

  useEffect(() => {
    const number = parseInt(inputset);
    if (number < 0 || number > state.length) return;
    const data = state.slice(0, number);
    setState1(data);
  }, [inputset]);

  useEffect(() => {
    if (!inputset2) {
      setState2([...state1]);
    } else {
      setState2(
        state1.filter((user) => {
          return user.login.substring(0, user.login.length);
        })
      );
    }
  }, [inputset2]);

  return (
    <div className="main_container">
      <input
        type="text"
        value={inputset}
        onChange={(e) => setInputset(e.target.value)}
      />
      <input
        type="text"
        value={inputset2}
        onChange={(e) => setInputset2(e.target.value)}
      />
      <div className="main_container_main">
        {state2.map((user) => {
          return (
            <Card
              key={user.id}
              login={user.login}
              avatar_url={user.avatar_url}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Fetchdata;
