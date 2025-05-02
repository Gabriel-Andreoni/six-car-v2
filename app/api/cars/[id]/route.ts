import prisma from "@/app/lib/prisma";
import { NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
    try {
        const {pathname} = request.nextUrl;
        const segments = pathname.split('/');
        const id = segments[segments.length - 1];
        
        const car = await prisma.carros.findUnique({
            where: { id: Number(id) },
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
