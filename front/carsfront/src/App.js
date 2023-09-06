import "./App.css";
import { useEffect, useState } from "react";
import { getAllCars } from "./services/carsService";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Cars from "./pages/Cars";

function App() {
const [cars, setCars] = useState([]);
useEffect(() => {
getAllCars().then(({ data }) => setCars(data));
}, []);
console.log(cars)
return (
<Routes>
    <Route path="/" element={<Header />}></Route>
    <Route index path="/cars" element={<Cars />}></Route>
</Routes>
);
}

export default App;
