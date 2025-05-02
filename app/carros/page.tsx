export const dynamic = 'force-dynamic';

import { CarList } from "../components/CarList"
import { Carro } from "../interfaces/carro";
import { getApiUrl } from "../lib/getApiUrl";

interface CarrosData {
    data: Carro[];
}

export default async function Carros() {
    try {
        const res = await fetch(getApiUrl('/api/cars'), {
            cache: 'no-store',
        });

        if (!res.ok) throw new Error('Falha ao buscar os dados');

        const carros: CarrosData = await res.json();
        return <CarList carros={carros.data} />

    } catch (error) {
        console.error('Error fetching data:', error);
        return <div>Erro ao buscar os dados {(error as Error).message}</div>;
    }


}