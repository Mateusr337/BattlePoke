import styled from "styled-components";
import { ImageProps } from "../../interfaces/imageInterface";

export const Container = styled.div`
  width: 100%;
  height: 80px;

  background: #172b4d;
  padding: 0px 20px;
  color: #d6962a;

  display: flex;
  justify-content: space-between;
  align-items: center;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;

  @media (max-width: 600px) {
    height: 50px;
  }
`;

export const DivFlex = styled.div`
  gap: 20px;

  display: flex;
  align-items: center;

  @media (max-width: 600px) {
    gap: 5px;
  }
`;

export const UserImage = styled.div<ImageProps>`
  width: 65px;
  height: 65px;

  border-radius: 50%;
  border: 3px solid #d6962a;

  cursor: pointer;

  background: url(${(p) => p.src});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;

  @media (max-width: 600px) {
    width: 30px;
    height: 30px;
  }
`;

export const UserInfo = styled.div`
  gap: 8px;

  font-weight: 500;
  font-size: 20px;

  display: flex;
  flex-direction: column;

  div {
    display: flex;
    gap: 30px;
  }

  @media (max-width: 600px) {
    font-size: 10px;
    gap: 3px;

    div {
      flex-direction: column;
      gap: 2px;
    }
  }
`;

export const ToReceive = styled.div`
  width: 120px;
  height: 60px;

  gap: 5px;

  font-size: small;
  font-weight: 900;
  color: #d6962a;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  @media (max-width: 600px) {
    font-size: 13px;
  }
`;
