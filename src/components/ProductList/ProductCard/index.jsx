import style from "./style.module.scss";

export const ProductCard = ({ product, addProductToCart }) => {
    return(
        <li className={style["card"]}>
            <div className={style["image-container"]}>
                <img src={product.img} alt={product.name} referrerPolicy="no-referrer" />
            </div>

            <div className={style["info-container"]}>
                <h3>{product.name}</h3>
                <span className={style["category"]}>{product.category}</span>
                <span className={style["price"]}>{product.price.toLocaleString('pt-BR', { style: "currency", currency: "BRL"})}</span>
                <button onClick={() => addProductToCart(product)}>Adicionar</button>
            </div>
        </li>
    )
}