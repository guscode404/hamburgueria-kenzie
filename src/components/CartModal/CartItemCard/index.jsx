import { MdDelete } from "react-icons/md";
import style from "./style.module.scss";

export const CartItemCard = ({ product, removeProductFromCart }) => {
   return (
      <li className={style.card}>
         <div>
            <img src={product.img} alt={product.name} />
            <div>
               <h3>{product.name}</h3>
               <span>{product.price.toLocaleString('pt-BR', { style: "currency", currency: "BRL"})}</span>
            </div>
         </div>
         <button aria-label="delete" title="Remover item" onClick={() => {removeProductFromCart(product)}}>
            <MdDelete size={24} />
         </button>
      </li>
   );
};
