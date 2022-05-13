import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 80px;

  background: #528f92;
  padding: 0px 20px;

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
  border: 2px solid #eebb3b;
`;

export const UserInfo = styled.div`
  gap: 8px;

  font-family: "Montserrat";
  font-weight: 500;

  display: flex;
  flex-direction: column;
`;
