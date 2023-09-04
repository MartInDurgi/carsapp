import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import { getCars } from "./services/carsService";

function App() {
const [cars, setCars] = useState([]);
useEffect(() => {
getCars().then(({ data }) => setCars(data));
}, []);
console.log(cars)
return (
<div className="App">
    <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
            {}
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
            Learn React
        </a>
    </header>
</div>
);
}

export default App;
