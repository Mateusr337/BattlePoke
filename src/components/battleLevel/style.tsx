import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  padding: 15px;
  border-radius: 15px;
  gap: 20px;

  font-family: "Montserrat";

  background: #f5e15e;

  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;

  cursor: pointer;
`;

export const Title = styled.div`
  font-size: 25px;
  font-weight: 700;
  text-align: center;
`;

export const PokemonBox = styled.div`
  gap: 10px;

  font-weight: 800;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Image = styled.img`
  width: 100px;
  height: 90px;

  border-radius: 50%;
`;
