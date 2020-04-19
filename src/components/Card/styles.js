import styled from 'styled-components';

export const Container = styled.ul`
  width: 100%;
  max-width: 1000px;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  margin: 30px auto;

  li {
    display: flex;
    justify-content: center;
    flex-direction: column;
    background: #fff;
    padding: 20px;
    border-radius: 4px;
    div {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    img {
      width: 100%;
      background: #eee;
    }
  }

  footer {
    width: 100%;
    padding: 10px 0;
    display: flex;
    align-items: center;
    justify-content: space-around;
    align-self: center;
    div {
      display: flex;
    }
    span {
      color: #333;
      font-weight: bold;
      font-size: 0.8em;
    }
  }
`;
export const ButtonFavorite = styled.button`
  margin: 0 3px;
  background: none;
  border: 0;
`;
export const DetailsButton = styled.button`
  margin: 0 3px;
  background: none;
  border: 0;
`;
