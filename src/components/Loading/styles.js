import styled, { keyframes, css } from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg)
  } to {
    transform: rotate(360deg)
  }
`;
export const Container = styled.div`
  width: 100%;
  height: 90%;
  position: fixed;
  top: 75px;

  display: flex;
  justify-content: center;
  align-items: center;
  ${({ loading }) =>
    loading &&
    css`
      svg {
        animation: ${rotate} infinite 0.8s;
      }
    `}
`;
