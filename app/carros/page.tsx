import { CarList } from "../components/CarList"
import { Carro } from "../interfaces/carro";

interface CarrosData {
    data: Carro[];
}

export default async function Carros() {
    const data = await fetch('http://localhost:3000/api/cars');

    const carros:CarrosData = await data.json();

    return <CarList carros={carros.data}/>
}