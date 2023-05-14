import { useState, useRef } from "react";

const Sweets = () => {
  const [productName, setProductName] = useState("Ladoo ");
  const [productImage, setProductImage] = useState("https://www.seema.com/wp-content/uploads/2022/06/Motichoor-Ladoo.jpg");

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

  const menuSwitch = (f, name, image) => {
    setProductName(name);
    setProductImage(image);
    const sidebarItem = document.getElementById(`sidebar_item_${f}`);
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

export default Sweets;