import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import { AiOutlineLoading } from 'react-icons/ai';
import { toast } from 'react-toastify';

import { addCardsList } from '../../store/actions';

import api from '../../services/api';
import { Container, ButtonSubmit } from './styles';

export default function Search() {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);

  async function handleCard({ card_name }) {
    setLoading(true);
    try {
      if (card_name === '') throw 'Search an card please!';
      const response = await api.get('cardinfo.php', {
        params: {
          fname: card_name,
          sort: 'name',
        },
      });
      dispatch(addCardsList(response.data));
      setLoading(false);
    } catch (err) {
      if (err.response) {
        if (err.response.status === 400) {
          toast.error('Card not found');
        }
      }
      setLoading(false);
      toast.error(err);
    }
  }
  return (
    <Container>
      <Form onSubmit={handleCard}>
        <Input name="card_name" placeholder="Search an YI-YU-GI-OH card" />

        <ButtonSubmit loading={loading} type="submit">
          {loading ? <AiOutlineLoading size={20} color="#FFF" /> : 'Search'}
        </ButtonSubmit>
      </Form>
    </Container>
  );
}
