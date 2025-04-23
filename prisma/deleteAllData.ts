import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function deleteAllData() {
    await prisma.carros.deleteMany();

    return console.log('Data deletada com sucesso.');
}

deleteAllData();