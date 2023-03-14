import { Link } from 'react-router-dom';
import './catalog.css';

function Catalog() {
  return (
    <div className="catalog block">
      <div className="container">
        <h1 className="title">Каталог товаров</h1>
        <div className="catalog__categories">
          <Link to="/catalog/cardio" className="catalog__link">
            Кардиотренажеры
          </Link>
          <Link to="/catalog/silovyie" className="catalog__link">
            Силовые тренажеры
          </Link>
          <Link to="/catalog/fitness" className="catalog__link">
            Фитнес
          </Link>
        </div>
      </div>
    </div>
  );
}

export { Catalog };
