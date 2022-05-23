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
  gap: 20px;
  display: flex;
  align-items: center;

  font-size: 26px;
  font-weight: 600;

  position: fixed;
  ${(p) => p.position}: 0;
  left: 0;
`;

export const Image = styled.div<ImageProps>`
  width: 65px;
  height: 65px;

  border-radius: 50%;

  background: url(${(p) => p.src});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
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
`;

export const Text = styled.span`
  font-size: 26px;
  font-weight: 500;
`;
