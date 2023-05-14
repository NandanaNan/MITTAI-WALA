import { useEffect, useState } from "react";

const Product = (props) => {
    const {item} = props;
    const [price, setPrice] = useState(item.price)
    const productImage = "www.seema.com/wp-content/uploads/2022/06/Motichoor-Ladoo.jpg"
    const decrease = () => {
        setPrice(price - 1)
    }
    useEffect(() => {
        console.log("mounted")
        return () => {
            console.log("unmounted")
        }
    }, [])
    
    return (
        <div className="product_card_container">
            <div className="product_card">
                <img src={`https:${productImage}`} />
                <div className="product_details">
                    <div className="product_name">
                        {item.name}
                    </div>
                    <div className="product_number">
                        <button onClick={decrease}>-</button>
                        No. of items = {price}
                        <button onClick={()=>setPrice(price + 1)}>+</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product