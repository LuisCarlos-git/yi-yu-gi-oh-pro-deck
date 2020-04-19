import styled, { css, keyframes } from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg)
  } to {
    transform: rotate(360deg)
  }
`;

export const Container = styled.div`
  width: 100%;

  form {
    display: flex;
    flex-direction: row;
    align-self: center;
    justify-content: flex-end;
    align-items: center;
    margin-right: 30px;

    input {
      height: 30px;
      width: 100%;
      max-width: 350px;
      border: 0;
      padding: 0 15px;
      border-radius: 4px 0 0 4px;
      font-weight: bold;
    }
    button {
      background: #ef233c;
    }
  }
`;

export const ButtonSubmit = styled.button`
  height: 30px;
  width: 100%;
  max-width: 60px;
  border-radius: 0 4px 4px 0;
  color: #fff;
  font-weight: bold;
  ${({ loading }) =>
    loading &&
    css`
      svg {
        animation: ${rotate} infinite 0.8s;
      }
    `}
`;
