import { useNavigate } from "react-router"

export function Home() {
    const navigate = useNavigate()

    return (
        <div>
            <h1>Pagina home</h1>

            <nav>
                <a href="/products">produtos</a>
                <a href="/products?category=eletronicos">categoria</a>

                <button type="button" onClick={() => navigate("/products")}>Ver produto</button>
            </nav>
        </div>
    )
}