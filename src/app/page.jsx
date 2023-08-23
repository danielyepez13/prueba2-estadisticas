"use client"
import Link from "next/link"

// Se borrarán todos los registros
const onDelete = async () => {
  const res = await fetch("https://prueba2-estadisticas.vercel.app/api/movies", {
    method: "DELETE"
  })
  return res.json();
}
export default function Home() {

  return (
    <div>
      <h1>Registro de excel</h1>
      <Link href="/form" className="bg-gray-500 my-4">
        Formulario de registro
      </Link>
      <br />
      <Link href="/movies" className="bg-gray-500 my-3">
        Lista de registros
      </Link>
      <br />
      <button onClick={onDelete}>Borrar todo</button>
    </div>
  )
}
