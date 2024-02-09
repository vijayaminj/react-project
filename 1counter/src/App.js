import React from "react";
import './App.css';
import Classcompo from "./component/Classcompo";
import Functioncompo from "./component/Functioncompo";

function App() {
  return (
    <div className="App">
      <h1>counter project</h1>
      <Classcompo name="danish" />
      {/* <Functioncompo name="novita" /> */}
    </div>
  );
}

export default App;
