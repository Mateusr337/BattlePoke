import styled from "styled-components";

interface Props {
  level: string;
}

export const Container = styled.div`
  width: 100%;

  padding: 15px;
  border-radius: 15px;
  gap: 20px;
  color: #ff9741;

  background: #363636;

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
  color: #ff9741;

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
`;

export const PokemonBox = styled.div`
  gap: 10px;

  font-weight: 800;
  font-size: 18px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Image = styled.img<Props>`
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
`;
