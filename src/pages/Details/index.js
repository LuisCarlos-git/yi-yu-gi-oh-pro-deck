import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import api from '../../services/api';

import Header from '../../components/Header';
import Loading from '../../components/Loading';

import {
  Container,
  DetailsCard,
  Image,
  Info,
  Description,
  CardImages,
} from './styles';

export default function Details() {
  const { name } = useParams();

  const [card, setCard] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function handleCard() {
      setLoading(true);
      const response = await api.get('cardinfo.php', {
        params: {
          name,
        },
      });

      setCard(response.data);
      setLoading(false);
    }
    handleCard();
  }, [name]);

  if (loading) {
    return <Loading loading={loading} />;
  }

  return (
    <>
      <Header />

      <Container>
        {card.map((c) => (
          <>
            <DetailsCard>
              <Image>
                <img src={c.card_images[0].image_url} alt={c.name} />
              </Image>

              <Info>
                <h2>{c.name}</h2>
                <Description>{c.desc}</Description>
                <div>
                  <span>Atk: {c.atk ? c.atk : 'Atk not found'}</span>
                  <span>Def: {c.def ? c.def : 'Def not found'}</span>
                  <span>Type: {c.type}</span>
                  <span>
                    Archetype:{' '}
                    {c.archetype ? c.archetype : ' Archetype not found'}
                  </span>
                  <span>Level: {c.level ? c.level : ' level not found'}</span>
                </div>
              </Info>
            </DetailsCard>
            <CardImages>
              <h2>Gallery cards</h2>
              <ul>
                {c.card_images.map((image) => (
                  <a
                    href={image.image_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <li key={String(image.id)}>
                      <img src={image.image_url} alt="" />
                    </li>
                  </a>
                ))}
              </ul>
            </CardImages>
          </>
        ))}
      </Container>
    </>
  );
}
