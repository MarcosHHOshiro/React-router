import { useSearchParams } from "react-router"

export function Products() {
    const [searchParams] = useSearchParams()
    console.log(searchParams)

    const category = searchParams.get("category")

    return (
        <div>
            <h1>Produtos</h1>


            {
                category && (
                    <span>
                        Categoria <strong>{category}</strong>
                    </span>
                )
            }

            <nav>
                <a href="/">back</a>
            </nav>
        </div>
    )
}