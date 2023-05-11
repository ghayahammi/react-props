import React, { Component } from 'react';
import './App.css';
import ProfileComponent from './Profile/ProfileComponent'
import imagesrc from "./005.JPG"

function App() {
  const styleObject={ color: "red" , textAlign:"center"}

  const handelAlert = () => {
    alert("Ghaya Hammi");
  };

  return (
    <div style={styleObject}
     className="App">
    
     <ProfileComponent fullName={"Ghaya Hammi"}
     bio={"We make apps to make your business progress."}
     profession={"developer"}  
     handelAlert={handelAlert}
     >
     <img src={imagesrc}  alt="img"/>
    </ProfileComponent>

    </div>
  );
}

export default App;
