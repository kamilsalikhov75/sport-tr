import './product-card.css';
import { Link } from 'react-router-dom';
import { serverUrl } from '../../const';

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <Link to={`/product/${product._id}`} className="product-card__link">
        <img
          src={`${serverUrl}${product.image}`}
          className="product-card__img"
        />
        {product.name}
      </Link>
      <p className="product-card__price">{product.price} ₽</p>
    </div>
  );
}

export { ProductCard };
