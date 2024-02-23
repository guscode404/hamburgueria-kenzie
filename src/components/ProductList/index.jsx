import { ProductCard } from "./ProductCard";
import style from "./style.module.scss";

export const ProductList = ({ productList, addProductToCart }) => {
   return (
      <ul className={style["list"]}>
         {productList.map((product) => (
            <ProductCard key={product.id} product={product} addProductToCart={addProductToCart} />
         ))}
      </ul>
   );
};
