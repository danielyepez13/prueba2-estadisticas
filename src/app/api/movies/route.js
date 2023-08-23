import { NextResponse } from "next/server"
import { prisma } from "@/libs/prisma"

// Funcion asincrona
export const GET = async () => {
    // Espera la respuesta de prisma con un buscar muchos
    const moviesList = await prisma.movies.findMany();

    // Retorna los registro como una respuesta, que en caso de que salga mal puede arrojar un error por si mismo.
    return NextResponse.json(moviesList);
}

export async function POST(request){
    const {movies} = await request.json();
    const data = await prisma.movies.createMany({
        data: [...movies]
    })

    return NextResponse.json(data);
}

// Borrar todos los registros
export async function DELETE(){
    const data = await prisma.movies.deleteMany()
    return NextResponse.json(data);
}