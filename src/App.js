import './App.css';
import react from "react";
import imagesrc from "./assets/moto-src.jpg"

function App() {
  return (
    <div>
    <div style={{border:"solid", borderColor: "black", maxWidth:"100 vw"}}>

 <h1 className="title red">Your name here</h1>

 <br />

 <img src={imagesrc} alt="motocycle1" />

 <br />

 <img src="/assets/moto-public.jpg" alt="motocycle" />

</div>

<video width="320" height="240" controls src="myVideo.mp4" type="video/mp4" >

</video>
 </div>
  );
  
}

export default App;
