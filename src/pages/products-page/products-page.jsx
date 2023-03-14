import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProducts } from '../../api';
import { ProductCard } from '../../components/product-card/product-card';
import { categories } from '../../const';
import './products-page.css';

function ProductsPage() {
  const { category } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const promise = getProducts();
    promise.then((responce) => {
      setProducts(
        responce.filter((product) => product.category === categories[category])
      );
    });
  }, []);

  return (
    <div className="products block">
      <div className="container">
        <h1 className="title">{categories[category]}</h1>
        <div className="products__block">
          {products.length ? (
            products.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))
          ) : (
            <h1 className="title">Загрузка</h1>
          )}
        </div>
      </div>
    </div>
  );
}

export { ProductsPage };
