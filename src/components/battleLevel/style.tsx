import styled from "styled-components";
import { ImageProps } from "../../interfaces/imageInterface";

interface Props {
  level: string;
}

export const Container = styled.button`
  width: 100%;

  padding: 15px;
  border-radius: 15px;
  gap: 20px;

  background: #363636;
  color: #d6962a;

  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;

  position: relative;

  cursor: pointer;
`;

export const ContainerBlock = styled.div`
  width: 100%;
  height: 100%;

  background: #363636;
  border-radius: 15px;
  color: #d6962a;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  position: absolute;
  top: 0;
  left: 0;
`;

export const Title = styled.div`
  font-size: 25px;
  font-weight: 700;
  text-align: center;

  @media (max-width: 600px) {
    font-size: 15px;
    font-weight: 400;
  }
`;

export const PokemonBox = styled.div`
  gap: 10px;

  font-weight: 800;
  font-size: 18px;

  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 600px) {
    font-size: 10px;
    font-weight: 400;
  }
`;

export const Image = styled.div<ImageProps & Props>`
  width: 100px;
  height: 90px;

  border: 4px solid
    ${(p) => {
      if (p.level === "common") return "green;";
      if (p.level === "rare") return "purple;";
      if (p.level === "epic") return "orange;";
      if (p.level === "mythical") return "gold;";
    }};

  border-radius: 50%;

  background: url(${(p) => p.src});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  @media (max-width: 600px) {
    width: 50px;
    height: 40px;
  }
`;
