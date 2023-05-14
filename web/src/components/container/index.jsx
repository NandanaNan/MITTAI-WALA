import { useEffect, useState } from "react"
import CreateProduct from "./create-product"
import Product from "./product"

const Products = () => {
    const [products, setProducts] = useState([])
    useEffect(()=> {
        getProducts()
    }, [])
    const getProducts = async()=> {
        const data = await fetch("http://localhost:3000/api/products");
        const d = await data.json()
        setProducts(d)
    }
    const createProduct = (p) => {
        setProducts([...products, p])
    }

    return (
        <>
            <CreateProduct createProduct={createProduct}/>
            {products.map(item => {
                return (
                    <Product item={item} />
                )
            })}
        </>
        
    )
}

export default Products;