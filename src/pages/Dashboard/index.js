import React from 'react';

import Header from '../../components/Header';
import Card from '../../components/Card';

import { Container } from './styles';

export default function Dashboard() {
  return (
    <>
      <Header />
      <Container>
        <Card />
      </Container>
    </>
  );
}
