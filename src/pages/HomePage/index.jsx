import { useEffect, useState } from "react";
import { CartModal } from "../../components/CartModal";
import { Header } from "../../components/Header";
import { ProductList } from "../../components/ProductList";
import { api } from "../../services/api";
import style from "./style.module.scss";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const HomePage = () => {
   const localStorageCart = localStorage.getItem("cart-products");
   const [productList, setProductList] = useState([]);
   const [cartList, setCartList] = useState(localStorageCart ? JSON.parse(localStorageCart) : []);

   useEffect(() => {
      const getProducts = async () => {
         const productsData = await api.get("/products");
         setProductList(productsData.data);
      }

      getProducts();
   }, []);

   useEffect(() => {
      if(cartList.length === 0) {
         localStorage.removeItem("cart-products");
      } else {
         localStorage.setItem("cart-products", JSON.stringify(cartList));
      }
   }, [cartList])

   const addProductToCart = (product) => {
      const filteredList = cartList.filter((element) => element.id === product.id ? true : false);
      if(filteredList.length !== 0) {
         toast.warn("O produto já se encontra na lista!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
         });            
      } else {
         toast.success("Produto adicionado ao carrinho!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
         });
         setCartList([...cartList, product]);
      }
   }

   const removeProductFromCart = (product) => {
      const filteredList = cartList.filter((element) => element.id !== product.id ? true : false);
      setCartList(filteredList);
   }

   const removeAllProductsFromCart = () => {
      setCartList([]);
   }

   const [isOpen, setIsOpen] = useState(false);

   const toggleModal = () => {
      setIsOpen(!isOpen);
   }

   return (
      <>
         <Header toggleModal={toggleModal} cartQuantity={cartList.length} />
         <ToastContainer />
         <main className={style["main"]}>
            <div>
               <ProductList productList={productList} addProductToCart={addProductToCart} />
               {isOpen ? <CartModal cartList={cartList} toggleModal={toggleModal} removeProductFromCart={removeProductFromCart} removeAllProductsFromCart={removeAllProductsFromCart}/> : null}
            </div>
         </main>
      </>
   );
};
