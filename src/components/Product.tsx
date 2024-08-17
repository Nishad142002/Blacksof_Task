import ButtonOption from "./productComp/ButtonOption";
import Card from "./productComp/Card";
import Header from "./productComp/Header";

import './style/product.css'

function Product() {

  return(
    <div className="product-container d-flex justify-content-center">
      <div className="pro-box">
        <div>
          <Header />
        </div>
        <div>
          <ButtonOption />
        </div>
        <div>
          <Card />
        </div>
      </div>
      

    </div>
  );

}

export default Product;