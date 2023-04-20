import React, { useState } from "react";
import Card from "./components/Card";

import './App.css'
import Button from "./components/Button";

function App() {
  const [selectedMajor, setSelectedMajor] = useState("");
  const handleClick = (major) => {
    setSelectedMajor(major);
  }


  return (
    <div className="App">
      <Button name="antwerp" onClick={() => handleClick("antwerp")} />
      <Button name="rio" onClick={() => handleClick("rio")} />
      <Button name="paris" onClick={() => handleClick("paris")} />
      <div className="comand">
      <Card capsuleName='legendsSticker' selectedMajor={selectedMajor}/>
      <Card capsuleName='contendersSticker' selectedMajor={selectedMajor} />
      <Card capsuleName='challengersSticker' selectedMajor={selectedMajor} />
      </div>
    </div>
  );
}

export default App;
