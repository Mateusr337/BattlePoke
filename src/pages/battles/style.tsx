import styled from "styled-components";
import { image } from "./constants";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;

  padding: 40px 30px 120px;
  gap: 20px;

  background-image: url(${image});

  display: flex;
  flex-direction: column;
`;

export const CardsContainer = styled.div`
  width: 100%;

  gap: 15px;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
