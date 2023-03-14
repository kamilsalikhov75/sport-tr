import './cart-product.css';
import { serverUrl } from '../../const';
import {
  addToCart,
  deleteFromCart,
  reduceFromCart,
} from '../../cart-controller';

function CartProduct({ product, cart, setCart, count }) {
  function addProduct() {
    const products = addToCart(product._id, cart);
    setCart(products);
  }

  function reduceProduct() {
    const products = reduceFromCart(product._id, cart);
    setCart(products);
  }

  function deleteProduct() {
    const products = deleteFromCart(product._id, cart);
    setCart(products);
  }

  return (
    <div className="cart-product">
      <img src={`${serverUrl}${product.image}`} className="cart-product__img" />
      <p className="cart-product__text">{product.name}</p>
      <div className="cart-product__block">
        <button onClick={reduceProduct} className="cart-product__button">
          <svg
            width="23"
            height="6"
            viewBox="0 0 23 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20.9695 0.65625H2.21948C1.35669 0.65625 0.656982 1.35596 0.656982 2.21875V3.78125C0.656982 4.64404 1.35669 5.34375 2.21948 5.34375H20.9695C21.8323 5.34375 22.532 4.64404 22.532 3.78125V2.21875C22.532 1.35596 21.8323 0.65625 20.9695 0.65625Z"
              fill="white"
            />
          </svg>
        </button>
        <p className="cart-product__text">{count}</p>
        <button onClick={addProduct} className="cart-product__button">
          <svg
            width="23"
            height="22"
            viewBox="0 0 23 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20.8445 8.65625H13.8132V1.625C13.8132 0.762207 13.1135 0.0625 12.2507 0.0625H10.6882C9.82544 0.0625 9.12573 0.762207 9.12573 1.625V8.65625H2.09448C1.23169 8.65625 0.531982 9.35596 0.531982 10.2188V11.7812C0.531982 12.644 1.23169 13.3438 2.09448 13.3438H9.12573V20.375C9.12573 21.2378 9.82544 21.9375 10.6882 21.9375H12.2507C13.1135 21.9375 13.8132 21.2378 13.8132 20.375V13.3438H20.8445C21.7073 13.3438 22.407 12.644 22.407 11.7812V10.2188C22.407 9.35596 21.7073 8.65625 20.8445 8.65625Z"
              fill="white"
            />
          </svg>
        </button>
      </div>
      <p className="cart-product__text">{product.price} ₽</p>
      <button onClick={deleteProduct} className="cart-product__delete-button">
        <svg
          width="19"
          height="18"
          viewBox="0 0 19 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.5038 0.713593L9.53193 5.68544L4.56008 0.713593C3.94999 0.103506 2.96046 0.103506 2.35037 0.713593L1.24552 1.81845C0.635431 2.42853 0.635431 3.41807 1.24552 4.02816L6.21736 9L1.24552 13.9718C0.635431 14.5819 0.635431 15.5715 1.24552 16.1816L2.35037 17.2864C2.96046 17.8965 3.94999 17.8965 4.56008 17.2864L9.53193 12.3146L14.5038 17.2864C15.1139 17.8965 16.1034 17.8965 16.7135 17.2864L17.8183 16.1816C18.4284 15.5715 18.4284 14.5819 17.8183 13.9718L12.8465 9L17.8183 4.02816C18.4284 3.41807 18.4284 2.42853 17.8183 1.81845L16.7135 0.713593C16.1034 0.103506 15.1139 0.103506 14.5038 0.713593Z"
            fill="black"
          />
        </svg>
      </button>
    </div>
  );
}

export { CartProduct };
