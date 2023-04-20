import React, { useState } from "react";
import Card from "./components/Card";

import './App.css'
import Button from "./components/Button";

function App() {
  const [selectedMajor, setSelectedMajor] = useState("");
  const [data, setData]=useState("");
  const handleClick = (major) => {
    setSelectedMajor(major);
  }


  return (
    <div className="App">
      <div className="btn">
      <Button name="antwerp" onClick={() => handleClick("antwerp")} />
      <Button name="rio" onClick={() => handleClick("rio")} />
      <Button name="parisЕЩЕ НЕ ВЫШЛИ" onClick={() => handleClick("paris")} />
      </div>
      <div className="upd">
        <button className="updatebtn" onClick={() => setData(Date.now)}>Обновить данные</button>
      </div>
      <div className="comand">
      <Card capsuleName='legendsSticker' selectedMajor={selectedMajor}  update={data}/>
      <Card capsuleName='contendersSticker' selectedMajor={selectedMajor}  update={data}/>
      <Card capsuleName='challengersSticker' selectedMajor={selectedMajor}  update={data}/>
      </div>
      <div className="auto">
      <Card capsuleName='legendsAutograph' selectedMajor={selectedMajor} update={data}/>
      <Card capsuleName='contendersAutograph' selectedMajor={selectedMajor} update={data}/>
      <Card capsuleName='challengersAutograph' selectedMajor={selectedMajor} update={data}/>
      </div>
      <div className="champ">
      <Card capsuleName='championsAutograph' selectedMajor={selectedMajor} update={data}/>
      </div>
    </div>
  );
}

export default App;
