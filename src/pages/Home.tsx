export function Home() {
    return (
        <div>
            <h1>Pagina home</h1>

            <nav>
                <a href="/products">produtos</a>
                <a href="/products?category=eletronicos">categoria</a>
            </nav>
        </div>
    )
}