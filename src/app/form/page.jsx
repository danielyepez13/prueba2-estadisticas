import Link from "next/link"
import Form from "@/components/Form"

const formPage = () => {
  return (
    <div>
      <Link href="/">
        Volver
      </Link>
        <Form />
    </div>
  )
}

export default formPage