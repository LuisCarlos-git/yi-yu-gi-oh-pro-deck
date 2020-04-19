import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TiStarOutline, TiStarFullOutline } from 'react-icons/ti';
import { MdRemoveRedEye } from 'react-icons/md';
import { useHistory } from 'react-router-dom';

import { Container, ButtonFavorite, DetailsButton } from './styles';

import { addToFavoriteList, removeFavoriteList } from '../../store/actions';

export default function Card() {
  const dispatch = useDispatch();
  const history = useHistory();
  const cards = useSelector((state) => state.list_cards);
  const favorites = useSelector((state) => state.favorite);

  function handleFavorite(id) {
    dispatch(addToFavoriteList(id));
  }

  function handleRemopveFavorite(id) {
    dispatch(removeFavoriteList(id));
  }

  return (
    <Container>
      {cards.map((card) => (
        <li key={String(card.id)}>
          <img src={card.card_images[0].image_url} alt="" />
          <footer>
            <span>{card.name}</span>
            <div>
              <DetailsButton
                onClick={() => history.push(`/details/${card.name}`)}
              >
                <MdRemoveRedEye size={25} color="#000" />
              </DetailsButton>
              <ButtonFavorite
                onClick={
                  favorites.find((f) => f.id === card.id)
                    ? () => handleRemopveFavorite(card.id)
                    : () => handleFavorite(card.id)
                }
              >
                {favorites.find((f) => f.id === card.id) ? (
                  <TiStarFullOutline size={25} color="yellow" />
                ) : (
                  <TiStarOutline size={25} color="#000" />
                )}
              </ButtonFavorite>
            </div>
          </footer>
        </li>
      ))}
    </Container>
  );
}
