import prisma from "@/app/lib/prisma";

export async function GET(request: Request, { params }: { params: Promise<{ id: string }> }) {
    try {
        const carId = parseInt(params.id);

        if (isNaN(carId)) {
            return Response.json({ error: 'ID inválido' }, { status: 400 });
        }

        const car = await prisma.carros.findUnique({
            where: { id: carId },
        });

        if (!car) {
            return Response.json({ error: 'Carro não encontrado' }, { status: 404 });
        }

        return Response.json({ data: car });
    } catch (error) {
        console.error('Erro ao buscar carro:', error);
        return Response.json({ error: 'Erro ao buscar carro' }, { status: 500 });
    }
}
