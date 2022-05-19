import styled from "styled-components";

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
`;

export const DivFlex = styled.div`
  gap: 20px;

  display: flex;
  align-items: center;
`;

export const UserImage = styled.img`
  width: 65px;
  height: 65px;

  border-radius: 50%;
  border: 3px solid #d6962a;

  cursor: pointer;
`;

export const UserInfo = styled.div`
  gap: 8px;

  font-weight: 500;
  font-size: 20px;

  display: flex;
  flex-direction: column;
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
`;
