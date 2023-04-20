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
      <div className="btn">
      <Button name="antwerp" onClick={() => handleClick("antwerp")} />
      <Button name="rio" onClick={() => handleClick("rio")} />
      <Button name="paris" onClick={() => handleClick("paris")} />
      </div>
      <div className="comand">
      <Card capsuleName='legendsSticker' selectedMajor={selectedMajor}  name='' img=''/>
      <Card capsuleName='contendersSticker' selectedMajor={selectedMajor}  name='' img=''/>
      <Card capsuleName='challengersSticker' selectedMajor={selectedMajor}  name='' img=''/>
      </div>
      <div className="auto">
      <Card capsuleName='legendsAutograph' selectedMajor={selectedMajor} name='' img=''/>
      <Card capsuleName='contendersAutograph' selectedMajor={selectedMajor} name='' img=''/>
      <Card capsuleName='challengersAutograph' selectedMajor={selectedMajor} name='' img=''/>
      </div>
      <div className="champ">
      <Card capsuleName='championsAutograph' selectedMajor={selectedMajor} name='' img=''/>
      </div>
    </div>
  );
}

export default App;
