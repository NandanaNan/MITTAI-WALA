import { useState, useRef } from "react";

const Login = () => {
  const [productName, setProductName] = useState("Gulab Jamun ");
  const [productImage, setProductImage] = useState("www.haribhoomi.com/h-upload/2023/02/14/1848390-gulab-jamun-recipe.jpg");

  const productBoxRef = useRef(null);

  const printProduct = () => {
    const products = [];
    for (let i = 0; i<24; i++) {
      products.push(
        <div key={i} className="product_card_container">
          <div className="product_card">
            <img src={`https://${productImage}`} alt={productName} />
            <div className="product_details">
              <div className="product_name">{productName}  Home made</div>
              <div className="product_price">{5+i*2}$</div>
            </div>
          </div>
        </div>
      );
    }
    return products;
  };

  const menuSwitch = (e, name, image) => {
    setProductName(name);
    setProductImage(image);
    const sidebarItem = document.getElementById(`sidebar_item_${e}`);
    sidebarItem.classList.add("active");
    printProduct();
  };

  return (
    <div>
      <div id="product_box" ref={productBoxRef} className="product_box_horizontal">
        {printProduct()}
      </div>
     
    </div>
  );
};

export default Login;



