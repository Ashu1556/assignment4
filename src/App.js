import "./App.css";
import React, { useState, useEffect } from "react";
import Fetchdata from "./Component/Fetchdata";

function App() {
  // const [state, setState] = useState([]);
  // const url = "https://api.github.com/users";
  // const data1 = async (url) => {
  //   const data = await fetch(`${url}`);
  //   const newdata = await data.json(data);
  //   setState(newdata);
  //   console.log(newdata);
  // };

  // useEffect(() => {
  //   data1(url);
  // }, [url]);
  return (
    <div className="App">
      {/* {state.map((ele) => {
        return (
          <div key={ele.id}>
            <li>{ele.login}</li>
          </div>
        );
      })} */}
      <Fetchdata />
    </div>
  );
}

export default App;
