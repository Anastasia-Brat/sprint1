import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Card({ card, onCardClick, onCardLike, onCardDelete }) {
  const cardStyle = { backgroundImage: `url(${card.link})` };

  function handleLikeClick() {
    onCardLike(card);
  }

  const currentUser = React.useContext(CurrentUserContext);

  const isLiked = card.likes.some(i => i._id === currentUser._id);
  const cardLikeButtonClassName = `card__like-button ${isLiked && 'card__like-button_is-active'}`;

  return (
    <li className="places__item card">
      <div className="card__image" style={cardStyle} onClick={handleClick}>
      </div>
      <div className="card__likes">
        <button type="button" className={cardLikeButtonClassName} onClick={handleLikeClick}></button>
        <p className="card__like-count">{card.likes.length}</p>
      </div>
    </li>
  );
}

export default Card;
