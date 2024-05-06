import React from "react";
import './App.css';
import Classcompo from "./component/Classcompo";
import Functioncompo from "./component/Functioncompo";
import Map from "./component/Map";

function App() {
  return (
    <div className="App">
      <h1>counter project</h1>
      <Classcompo name="danish" />
      <Functioncompo name="novita" />
      {/* <Map /> */}
    </div>
  );
}

export default App;
