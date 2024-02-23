import Logo from "../../assets/Logo.svg";
import { MdSearch, MdShoppingCart } from "react-icons/md";
import style from "./style.module.scss";

export const Header = ({ toggleModal, cartQuantity }) => {
   return (
      <header className={style["header"]}>
         <div>
            <img src={Logo} alt="Logo Kenzie Burguer" />
            <button onClick={toggleModal}>
                <MdShoppingCart size={25} />
                <span>{cartQuantity}</span>
            </button>
         </div>
      </header>
   );
};
