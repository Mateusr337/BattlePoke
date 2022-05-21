import styled from "styled-components";
import { ImageProps } from "../../interfaces/imageInterface";
interface Props {
  level: string;
  selected?: boolean;
  life?: number;
}

export const Container = styled.div<Props>`
  width: 150px;
  height: 200px;

  border: 3px solid
    ${(p) => {
      if (p.level === "common") return "green;";
      if (p.level === "rare") return "purple;";
      if (p.level === "epic") return "orange;";
      if (p.level === "mythical") return "gold;";
    }};
  ${(p) => p.selected && "opacity: 0.5;"}
  border-radius: 8px;

  background: ${(p) => {
    let color = "";
    (p.life || p.life === 0) && (color = p.life <= 0 ? "#000000" : "#f5e15e");
    return color;
  }};

  gap: 5px;
  padding: 10px;

  display: flex;
  flex-direction: column;
  align-items: center;

  position: relative;

  span {
    text-align: center;
    font-family: "montserrat";
    font-weight: 500;
  }
`;

export const Image = styled.div<ImageProps>`
  width: 120px;
  height: 90px;

  border-radius: 5px 5px 0 0;

  background: url(${(p) => p.src});
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Data = styled.div`
  width: 100%;
  min-height: 40px;

  font-family: "Montserrat";
  font-weight: 600;

  padding: 0px 10px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Types = styled.div`
  width: 100%;

  gap: 10px;
  margin: 0px 10px;
  padding: 3px;
  background: #ffffff;

  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 30px;
    height: 30px;
  }
`;

export const EvolutionContainer = styled.div`
  color: #142b4d;

  position: absolute;
  bottom: 0;
  right: 5px;

  cursor: pointer;
`;
