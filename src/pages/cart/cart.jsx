import axios from 'axios';
import { useEffect, useState } from 'react';
import { getProducts } from '../../api';
import { calculateSum } from '../../cart-controller';
import { CartProduct } from '../../components/cart-product/cart-product';
import { serverUrl } from '../../const';
import './cart.css';

function Cart({ cart, setCart }) {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [comment, setComment] = useState('');
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (cart.length) {
      const promise = getProducts();
      promise.then((responce) => {
        setProducts(responce);
      });
    }
  }, []);

  async function handleSubmit() {
    if (!email.trim() || !name.trim() || !phone.trim()) {
      alert('Заполните все обязательные поля!');
      return;
    }
    try {
      const order = {
        products: cart,
        email,
        name,
        phone,
        comment,
      };
      const responce = axios.post(`${serverUrl}/orders`, order);
      setCart([]);
      alert('Заказ создан');
    } catch (error) {
      alert('Не удалось создать заказ');
      console.log(error);
    }
  }
  return (
    <div className="cart block">
      <div className="container">
        {cart.length ? (
          <>
            <h1 className="title">Корзина</h1>
            {products.length ? (
              <>
                <div className="cart__products">
                  {cart.map((item) => (
                    <CartProduct
                      key={item.id}
                      count={item.count}
                      cart={cart}
                      setCart={setCart}
                      product={products.find(
                        (product) => product._id === item.id
                      )}
                    />
                  ))}
                </div>
                <p className="cart__price">
                  Итого: <span>{calculateSum(products, cart)} ₽</span>
                </p>
              </>
            ) : (
              <h1 className="title">Загрузка</h1>
            )}
            <form
              onSubmit={(event) => {
                event.preventDefault();
                handleSubmit();
              }}
              className="cart__form"
            >
              <input
                type="text"
                className="cart__input"
                placeholder="Email *"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
              <input
                type="text"
                className="cart__input"
                placeholder="Имя получателя *"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
              <input
                type="text"
                className="cart__input"
                placeholder="Номер телефона *"
                value={phone}
                onChange={(event) => setPhone(event.target.value)}
              />
              <textarea
                type="text"
                className="cart__textarea"
                placeholder="Комментарий"
                value={comment}
                onChange={(event) => setComment(event.target.value)}
              />
              <button type="submit" className="cart__button">
                Сделать заказ
              </button>
            </form>
          </>
        ) : (
          <h1 className="title">Корзина пуста</h1>
        )}
      </div>
    </div>
  );
}

export { Cart };
