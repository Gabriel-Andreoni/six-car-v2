import prisma from "@/app/lib/prisma";

export async function GET(request: Request, { params }: { params: { id: string } }) {
    try {
        const {pathname} = request.nextUrl;
        const segments = pathname.split('/');
        const id = segments[segments.length - 1];

        if (isNaN(id)) {
            return Response.json({ error: 'ID inválido' }, { status: 400 });
        }

        const car = await prisma.carros.findUnique({
            where: { id: id },
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
