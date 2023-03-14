import './product-page.css';
import { useParams } from 'react-router-dom';
import { getProduct } from '../../api';
import { useEffect, useState } from 'react';
import { serverUrl } from '../../const';
import { addToCart } from '../../cart-controller';

function ProductPage({ cart, setCart }) {
  const { id } = useParams();
  const [product, setProduct] = useState('');

  useEffect(() => {
    const promise = getProduct(id);

    promise.then((responce) => setProduct(responce));
  }, []);

  function addProduct() {
    const products = addToCart(id, cart);
    setCart(products);
  }

  return (
    <div className="product  block">
      <div className="container product__container">
        {product ? (
          <>
            <img
              src={`${serverUrl}${product.image}`}
              className="product__img"
            />
            <div className="product__block">
              <h1 className="title">{product.name}</h1>
              <h1 className="title">{product.price} ₽</h1>
              <button onClick={addProduct} className="button">
                В корзину
              </button>
              <p className="product__text">{product.decription}</p>
            </div>
          </>
        ) : (
          <h1 className="title">Загрузка</h1>
        )}
      </div>
    </div>
  );
}

export { ProductPage };
