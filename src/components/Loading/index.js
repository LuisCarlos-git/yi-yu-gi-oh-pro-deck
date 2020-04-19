import React from 'react';
import PropTypes from 'prop-types';
import { AiOutlineLoading } from 'react-icons/ai';

import Header from '../Header';

import { Container } from './styles';

export default function Loading({ loading }) {
  return (
    <>
      <Header />
      <Container loading={loading}>
        <AiOutlineLoading size={40} color="#ef233c" />
      </Container>
    </>
  );
}

Loading.propTypes = {
  loading: PropTypes.bool,
};

Loading.defaultProps = {
  loading: false,
};
