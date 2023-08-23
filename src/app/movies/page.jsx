import Link from "next/link"
import { prisma } from '@/libs/prisma'
import MoviesList from '@/components/MoviesList';

const loadMovies = async () => {
    return await prisma.movies.findMany()
}

const Movies = async () => {
    const movies = await loadMovies();
    // console.log(movies)
    return (
        <div>
            <Link href="/">
                Volver
            </Link>
            <h1>Movies</h1>
            {
                movies.map((movie, index) => (
                    <MoviesList movie={movie} key={index}  />
                ))
            }
        </div>
    )
}

export default Movies