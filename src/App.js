import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

import Cards from "./components/Cards";
import "./App.css"
import imagen1 from './assets/sir.png'

function App() {
 const [number, setNumber] = useState(0);
 
 return (
   <div className="App">
     <Header />
     <br></br>
     <img src={imagen1} alt=""></img>
     <br></br>
     <h1>Alexander Emerson Flores Rojas</h1>
     <h2>El valor de number es: {number}</h2>
     <div className="container">
     <button className="btn btn-outline-dark bg-dark text-light" onClick={() => setNumber(number + 1)}>Incrementar</button>
     <br></br>
     <br></br>
     <button className="btn btn-outline-danger bg-dark" onClick={() => setNumber(number - 1)}>Disminuir</button>
     </div>
     
     <br></br><br></br><br></br>
     <Cards/>
     <Footer ></Footer>
   </div>
 );
}
 
export default App;
