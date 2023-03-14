import { Link } from 'react-router-dom';
import './footer.css';
import logo from '../../assets/logo.svg';

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__container ">
        <div className="footer__block">
          <h3 className="footer__title">Каталог</h3>
          <ul className="footer__list">
            <li className="footer__list-item">
              <Link to="/catalog/cardio" className="footer__link">
                Кардиотренажеры
              </Link>
            </li>
            <li className="footer__list-item">
              <Link to="/catalog/silovyie" className="footer__link">
                Силовые тренажеры
              </Link>
            </li>
            <li className="footer__list-item">
              <Link to="/catalog/fitness" className="footer__link">
                Фитнес
              </Link>
            </li>
          </ul>
        </div>
        <div className="footer__block">
          <h3 className="footer__title">Информация</h3>
          <ul className="footer__list">
            <li className="footer__list-item">
              <Link to="/about" className="footer__link">
                О компании
              </Link>
            </li>
            <li className="footer__list-item">
              <Link to="/contacts" className="footer__link">
                Контакты
              </Link>
            </li>
          </ul>
        </div>
        <Link to="/index.html" className="footer__logo-link">
          <img src={logo} className="footer__logo" />
        </Link>
      </div>
    </footer>
  );
}

export { Footer };
