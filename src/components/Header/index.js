import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory, useLocation, Link } from 'react-router-dom';
import { TiStarOutline } from 'react-icons/ti';

import { Container, Favorite, Scroll } from './styles';

import logo from '../../assets/logo.png';
import Form from '../Form';

export default function Header() {
  const location = useLocation();
  const history = useHistory();
  const [visible, setVisible] = useState(false);

  const favorites = useSelector((state) => state.favorite);

  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="YI-YU-GI-OH!" />
      </Link>

      {location.pathname === '/' ? <Form /> : null}
      <button type="button" onClick={() => setVisible(!visible)}>
        <TiStarOutline size={30} color="#FFF" />
      </button>

      <Favorite visible={visible}>
        <div>
          <h2>Favorites </h2>
        </div>
        <Scroll>
          <ul>
            {favorites.map((f) => (
              <li key={String(f.id)}>
                <button
                  onClick={() => history.push(`/details/${f.name}`)}
                  type="button"
                >
                  {f.name}
                </button>
              </li>
            ))}
          </ul>
        </Scroll>
      </Favorite>
    </Container>
  );
}
