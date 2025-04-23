import { promises as fs } from "fs";
import prisma from "../lib/prisma";

export async function createCar(formData: FormData) {
    try {
        const carName = formData.get("car-name") as string;
        const carDescription = formData.get("car-description") as string;
        const carPrice = parseFloat(formData.get("car-price") as string);
        const carKm = parseFloat(formData.get("car-km") as string);
        const carYear = parseInt(formData.get("car-year") as string);
        const carLocation = formData.get("car-location") as string;
        const carGear = formData.get("car-gear") as string;
        const carExchange = formData.get("car-exchange") as string;
        const carTaxes = formData.get("car-taxes") as string;
        const carImages = formData.getAll('car-images');

        console.log("Dados do carro:", {
            carName,
            carDescription,
            carPrice,
            carKm,
            carYear,
            carLocation,
            carGear,
            carExchange,
            carTaxes,
            carImages,
        });

        if (carImages.length === 0) {
            console.log('Nenhum arquivo encontrado');
        }

        const fileNames: string[] = [];

        for (const image of carImages) {
            if (image instanceof File) {
                const file = image;
                const buffer = await file.arrayBuffer();
                const fileName = file.name;

                console.log(`Salvando arquivo: ${fileName}`);
                await fs.writeFile(`${process.cwd()}/public/${fileName}`, Buffer.from(buffer));

                fileNames.push(fileName);
            } else {
                console.log('Arquivo inválido');
            }
        }

        console.log("Criando carro no banco de dados...");
        const newCar = await prisma.carros.create({
            data: {
                name: carName,
                description: carDescription,
                price: carPrice,
                km: carKm,
                year: carYear,
                location: carLocation,
                gear: carGear,
                exchange: carExchange,
                taxes: carTaxes,
                images: JSON.stringify(fileNames),
            },
        });

        console.log("Carro criado com sucesso:", newCar);
        return newCar;

    } catch (error) {
        console.error("Erro ao criar o carro:", error); 
        throw error;
    }
}