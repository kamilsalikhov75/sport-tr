import { Link } from 'react-router-dom';
import './header.css';
import logo from '../../assets/logo.svg';
function Header() {
  return (
    <header className="header">
      <div className="container header__container">
        <Link to='/index.html' className="header__logo-link">
          <img src={logo} className="header__logo" />
        </Link>
        <nav className="header__naivgation">
          <Link to="/catalog" className="header__link">КАТАЛОГ ТОВАРОВ</Link>
          <Link to="/about" className="header__link">О КОМПАНИИ</Link>
          <Link to="/contacts" className="header__link">КОНТАКТЫ</Link>
          <Link to="/cart" className="header__link">КОРЗИНА</Link>
        </nav>
      </div>
    </header>
  );
}

export { Header };
