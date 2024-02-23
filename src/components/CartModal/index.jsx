import { MdClose } from "react-icons/md";
import { CartItemCard } from "./CartItemCard";
import style from "./style.module.scss";

export const CartModal = ({ cartList, toggleModal, removeProductFromCart, removeAllProductsFromCart }) => {
   const total = cartList.reduce((prevValue, product) => {
      return prevValue + product.price;
   }, 0);

   return (
      <div role="dialog" className={style["modal-base"]}>
         <div className={style["modal-content"]}>
            <div className={style["modal-header"]}>
               <h2>Carrinho de compras</h2>
               <button aria-label="close" title="Fechar" onClick={toggleModal}>
                  <MdClose size={21} />
               </button>
            </div>
            <div className={style["modal-list-container"]}>
               <ul>
                  {cartList.map((product) => (
                     <CartItemCard key={product.id} product={product} removeProductFromCart={removeProductFromCart} />
                  ))}
               </ul>
            </div>
            <div className={style["modal-footer"]}>
               <div>
                  <span className={style["total"]}>Total</span>
                  <span className={style["total-value"]}>{total.toLocaleString('pt-BR', { style: "currency", currency: "BRL"})}</span>
               </div>
               <button onClick={removeAllProductsFromCart}>Remover todos</button>
            </div>
         </div>
      </div>
   );
};
