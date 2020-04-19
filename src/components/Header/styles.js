import styled, { keyframes } from 'styled-components';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { darken } from 'polished';

const slideOpen = keyframes`
  from {
    width: 0
  }to {
    width: 350px;
  }
`;

const opacity = keyframes`
  0%{
    opacity: 0
  }50%{
    opacity: 0
  }75% {
    opacity: 0
  }100% {
    opacity: 1;
  }

`;

export const Container = styled.div`
  width: 100%;
  height: 75px;
  background: #0e1116;
  position: fixed;
  z-index: 3;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;

  button {
    background: none;
    border: 0;
  }
  a {
    width: 350px;
    height: 70px;

    img {
      width: 210px;
      height: 70px;
    }
  }
`;

export const Favorite = styled.div`
  background: #eee;
  padding: 20px;
  width: 350px;
  height: 100%;
  position: fixed;
  top: 75px;
  right: 0;
  display: ${({ visible }) => (visible ? 'block' : 'none')};
  animation: ${slideOpen} 0.3s;
  div {
    margin: 10px 0;
    h2 {
      font-size: 20px;
    }
  }

  ul {
    height: 100%;
    li {
      color: #666;
      display: flex;
      padding: 5px 0;
      flex-direction: column;
      border-bottom: 1px solid #666;
      animation: ${opacity} 0.3s;

      button {
        width: 100%;
        height: 30px;
        display: flex;
        align-items: center;
        font-weight: bold;
        color: #777;
        padding: 10px;
        border-radius: 4px;
        transition: background 0.3s;

        &:hover {
          color: ${darken(0.1, '#444')};
        }
      }
    }
  }
`;
export const Scroll = styled(PerfectScrollbar)`
  max-height: 450px;
  height: 100%;
  padding: 10px;
`;
