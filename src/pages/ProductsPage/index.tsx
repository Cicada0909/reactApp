import { useEffect, useState } from "react"
import { IProduct } from "../../interfaces/product"
import ProductCard from "../../components/ProductCard"

/* Страница продуктов */
const ProductsPage = () => {

    // TODO: Типизировать
    // Это массив продуктов
    const [products, setProducts] = useState<IProduct[]>([])

    // Тут мы получаем данные с апи и записываем в продукты
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(json=> setProducts(json)) 
    }, [])

    console.log(products)

    return (
        <div style={{display: 'flex', gap: 20, flexWrap: 'wrap', padding: 20}}>
            {products.length > 0 && 
                products.map((product) => {
                return(
                        <ProductCard key={product.id} product={product} />
                )
            })}
        </div>
    )
}

export default ProductsPage