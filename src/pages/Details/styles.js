import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  margin-top: 20px;
  margin-bottom: 30px;
  padding: 20px;
  border-radius: 4px;
  width: 900px;
  background: #fff;
  min-height: 80%;
  position: absolute;
  top: 75px;
  left: 210px;
`;
export const DetailsCard = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Image = styled.div`
  width: 400px;
  padding: 5px;
  img {
    width: 300px;
  }
`;

export const Info = styled.div`
  width: 100%;
  h2 {
    text-align: center;
    width: 100%;
  }

  div {
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    padding: 0 20px;

    > span {
      border-bottom: 1px solid ${darken(0.1, '#EEE')};
      padding: 5px;
      color: #444;
      font-size: 16px;
      font-weight: bold;
    }
  }
`;

export const Description = styled.span`
  font-size: 17px;
  padding: 0 20px;
  margin-top: 10px;
  color: #666;
  font-weight: bold;
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const CardImages = styled.div`
  margin-top: 20px;
  h2 {
    color: #333;
    font-size: 30px;
  }
  ul {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    border: 1px dashed ${darken(0.1, '#eee')};
    li {
      padding: 10px;
      img {
        width: 100%;
      }
    }
  }
`;
