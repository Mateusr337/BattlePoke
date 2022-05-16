import styled from "styled-components";

interface UserInfoProps {
  position: "top" | "bottom";
}

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  background: lightgreen;
  gap: 35px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const UserInfo = styled.div<UserInfoProps>`
  width: 100%;
  height: 80px;

  background: lightslategray;
  padding: 0px 20px;
  gap: 20px;
  display: flex;
  align-items: center;

  font-size: 26px;
  font-family: "montserrat";
  font-weight: 600;

  position: fixed;
  ${(p) => p.position}: 0;
  left: 0;
`;

export const Image = styled.img`
  width: 65px;
  height: 65px;

  border-radius: 50%;
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
