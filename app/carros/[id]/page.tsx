import { Carro } from "@/app/interfaces/carro";

export default async function CarDetails({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;

    const reqAPI = await fetch(`/api/cars/${id}`)
    const carData = await reqAPI.json();
    const carro:Carro = carData.data;

    console.log(carro)

    return (
        <section className="w-full h-auto bg-[#ecedf2]">
            {carro.name}
        </section>
    )
}