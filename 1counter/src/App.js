import React from "react";
import './App.css';
import Classcompo from "./component/Classcompo";
import Functioncompo from "./component/Functioncompo";

function App() {
  return (
    <div className="App">
      <h1>counter</h1>
      {/* <Classcompo /> */}
      <Functioncompo name="novita" />
    </div>
  );
}

export default App;
