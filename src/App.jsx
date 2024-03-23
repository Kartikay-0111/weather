import React from "react";
import Weather from "./components/weather";
import "w3-css/w3.css";

function App() {

  return (
    <div className='w3-margin'>
      <div style={{ width: "500px", margin: "0 auto" }} className='w3-blue w3-card-4 w3-round-xlarge'>
        <Weather />
      </div>
    </div>
  )
}

export default App;
