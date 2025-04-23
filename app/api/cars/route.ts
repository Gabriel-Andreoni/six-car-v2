import { createCar } from "@/app/actions/createCar";
import prisma from "@/app/lib/prisma";

export async function GET() {
    try {
        const carros = await prisma.carros.findMany();

        return Response.json({
            data: carros
        });
    } catch (err) {
        console.error(err);

        return Response.json({
            error: "Erro ao buscar os carros"
        }, {
            status: 500
        });
    }
}

export async function POST(request: Request) {
    try {
        const data = await request.formData();

        const carros = await createCar(data);

        return Response.json({
            data: carros
        }, {
            status: 201
        });

    } catch (error) {
        console.error("Erro na rota POST:", error);
        return Response.json({
            error: "Erro ao criar o carro"
        }, {
            status: 500
        });
    }
}