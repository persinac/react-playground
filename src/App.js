import './App.css';
import React, { useState }from "react";
import IncrementDecrementComponent from "./components/IncrementDecrement";
import UserInput from "./components/UserInput";

function App() {
  return (
    <div className="App">
        <IncrementDecrementComponent />
        <UserInput />
    </div>
  );
}



export default App;
