import "./App.css";
import Amplify, { API } from "aws-amplify";
import React, { useEffect, useState } from "react";

const myAPI = "capstoneproject";
const path = "/user";

const App = () => {
  const [input, setInput] = useState("");
  const [user, setUser] = useState([]);

  function getUser(e) {
    let userId = e.input;
    API.get(myAPI, path + "/" + userId)
      .then((response) => {
        console.log(response);
        let newUser = [...user];
        newUser.push(response);
        setUser(newUser);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className='App'>
      <h1>Super Simple React App</h1>
      <div>
        <input
          placeholder='user id'
          type='text'
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
      <br />
      <button onClick={() => getUser({ input })}>
        Get User From Backend
      </button>

      <h2 style={{ visibility: user.length > 0 ? "visible" : "hidden" }}>
        Response
      </h2>
      {user.map((thisUser, index) => {
        return (
          <div key={thisUser.userId}>
            <span>
              <b>userId:</b> {thisUser.userId} - <b>userName</b>
              : {thisUser.userName}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default App;
