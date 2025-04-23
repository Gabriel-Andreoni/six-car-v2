import Image from "next/image";
import Link from "next/link";
import { Carro } from "../interfaces/carro";

type CarrosData = {
    carros: Carro[];
}

export function CarList({ carros }: CarrosData) {
    return (
        <ul className="w=full h-auto p-4 pt-24 flex flex-wrap gap-4">
            {carros.map((carro: Carro) => {
                const images: string[] = JSON.parse(carro.images);
                return (
                    <li
                        key={carro.id}
                        className="w-auto h-auto flex flex-col p-4 rounded-lg  bg-white shadow-lg"
                    >
                        <div className="p-4 pb-0 flex gap-4 rounded-lg">
                            {images.map((image: string, index: number) => {
                                return (
                                    <Image
                                        key={index}
                                        className="rounded-lg"
                                        src={`/${image}`}
                                        width={200}
                                        height={200}
                                        alt="imagem de um carro" />
                                )
                            })}
                        </div>

                        <div className="pt-0 p-4">
                            <h2 className="mt-4 font-bold">{carro.name}</h2>
                            <p className="font-light text-sm text-gray-500">{carro.description}</p>
                            <h1 className="text-2xl font-black">
                                {Number(carro.price).toLocaleString("pt-BR", {
                                    style: "currency",
                                    currency: "BRL",
                                })}
                            </h1>

                            <button className="w-full mt-4 p-4 bg-slate-950 text-white font-bold rounded-lg transition-all hover:bg-slate-700">
                                <Link href={`/carros/${carro.id}`}>
                                    Saiba mais
                                </Link>
                            </button>
                        </div>

                    </li>
                )
            })}
        </ul>
    )
}