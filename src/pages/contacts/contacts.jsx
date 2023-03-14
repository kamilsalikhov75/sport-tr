import './contacts.css';

function Contacts() {
  return (
    <div className="contacts block">
      <div className="container">
        <h1 className="title">Контакты</h1>
        <p className="text">
          Вы можете связаться с нами по возникшим вопросам следующими способами:
        </p>
        <ul className="list">
          <li className="list-item">По электронной почте: sport@mail.ru</li>
          <li className="list-item">По телефону: 8-917-123-45-67</li>
        </ul>
      </div>
    </div>
  );
}

export { Contacts };
