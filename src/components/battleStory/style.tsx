import styled from "styled-components";
import { ImageProps } from "../../interfaces/imageInterface";

interface Props {
  level: string;
}

export const Container = styled.div`
  width: 80%;

  background: #363636;
  color: #d6962a;
  padding: 20px;
  border-radius: 10px;
  gap: 15px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Top = styled.span`
  width: 100%;

  text-align: center;
  font-size: 25px;
`;

export const DivFlex = styled.div`
  width: 100%;

  gap: 10px;

  display: flex;
  justify-content: space-around;
`;

export const User = styled.div`
  gap: 10px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Image = styled.div<ImageProps & Props>`
  width: 55px;
  height: 45px;

  border-radius: 50%;

  background: url(${(p) => p.src});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;

  border: 2px solid
    ${(p) => {
      if (p.level === "common") return "green;";
      if (p.level === "rare") return "purple;";
      if (p.level === "epic") return "orange;";
      if (p.level === "mythical") return "gold;";
    }};

  @media (max-width: 600px) {
    width: 35px;
    height: 30px;
  }
`;
