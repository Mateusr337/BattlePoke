import styled, { keyframes } from "styled-components";
import { ImageProps } from "../../interfaces/imageInterface";

interface UserInfoProps {
  position: "top" | "bottom";
  life: number;
}

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  background: #ffffff;
  gap: 35px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const UserInfo = styled.div<UserInfoProps>`
  width: 100%;
  height: 80px;

  background: #172b4d;
  color: ${(p) => (p.life < 400 ? "darkred" : "#d6962a")};
  padding: 0px 20px;
  gap: 70px;
  display: flex;
  align-items: center;

  font-size: 26px;
  font-weight: 600;

  display: flex;
  justify-content: center;

  position: fixed;
  ${(p) => p.position}: 0;
  left: 0;

  h1 {
    position: absolute;
    top: 45%;
    left: 40px;

    color: #d6962a;
  }

  @media (max-width: 600px) {
    height: 50px;

    font-size: 15px;
    font-weight: 400;

    gap: 15px;

    .IconBot {
      width: 30px;
    }
  }
`;

export const Image = styled.div<ImageProps>`
  width: 65px;
  height: 65px;

  border-radius: 50%;

  background: url(${(p) => p.src});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;

  @media (max-width: 600px) {
    width: 35px;
    height: 35px;
  }
`;

export const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Field = styled.div`
  width: 100%;

  gap: 20px;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

export const AttackInfo = styled.div`
  display: flex;
  gap: 20px;
`;

export const FinalScreen = styled.div`
  width: 50vw;
  height: 50vh;

  background: #ffffff;
  gap: 30px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;

  z-index: 2;

  @media (max-width: 600px) {
    width: 95%;
  }
`;

export const FinalBackground = styled.div`
  width: 100vw;
  height: 100vh;

  background: #000000;
  opacity: 0.8;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  z-index: 1;
`;

export const Winner = styled.span`
  font-size: 32px;
  font-weight: 800;

  @media (max-width: 600px) {
    font-size: 22px;
    font-weight: 400;
  }
`;

export const Text = styled.span`
  font-size: 26px;
  font-weight: 500;

  @media (max-width: 600px) {
    font-size: 18px;
    font-weight: 400;
  }
`;

export const InfoBattle = styled.div`
  width: 200px;

  border-radius: 10px;
  border: 2px solid darkred;

  display: flex;
  text-align: center;

  position: fixed;
  top: 40%;
  right: 25px;
  z-index: 1;

  @media (max-width: 600px) {
    top: 60px;
    font-size: 11px;
  }
`;
