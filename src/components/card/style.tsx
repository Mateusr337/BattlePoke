import styled from "styled-components";
import { ImageProps } from "../../interfaces/imageInterface";
interface Props {
  level: string;
  selected?: boolean;
  life?: number;
  shake?: true;
}

interface LifeProps {
  shake?: true;
}

export const Container = styled.div<Props>`
  width: 150px;
  height: 200px;
  font-size: 14px;

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

  ${(p) =>
    p.shake &&
    `
    animation: shake .2s;
    animation-iteration-count: 4;
  `}

  @keyframes shake {
    0% {
      margin-left: 0;
    }
    25% {
      margin-left: 7px;
    }
    50% {
      margin-left: 0;
    }
    75% {
      margin-left: -7px;
    }
    100% {
      margin-left: 0;
    }
  }

  gap: 5px;
  padding: 10px;

  display: flex;
  flex-direction: column;
  align-items: center;

  position: relative;

  span {
    text-align: center;
  }

  @media (max-width: 600px) {
    width: 100px;
    height: auto;

    font-size: 8px;
  }
`;

export const Image = styled.div<ImageProps>`
  width: 100%;
  height: 90px;

  border-radius: 5px 5px 0 0;

  background: url(${(p) => p.src});
  background-repeat: no-repeat;
  background-size: cover;

  @media (max-width: 600px) {
    height: 40px;
  }
`;

export const Data = styled.div`
  width: 100%;
  min-height: 40px;

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
`;

export const IconsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  position: absolute;
  bottom: 5px;
  right: 5px;

  overflow: hidden;

  cursor: pointer;
`;

export const Life = styled.span<LifeProps>`
  ${(p) => p.shake && "color: darkred;"}
`;

export const Dead = styled.span`
  width: 100%;

  color: darkred;
  font-size: 28px;
  font-family: "Bungee Inline";

  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  top: 58%;
  left: 0;

  @media (max-width: 600px) {
    font-size: 15px;
  }
`;
