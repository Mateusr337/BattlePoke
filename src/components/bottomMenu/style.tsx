import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 80px;

  background: #172b4d;
  color: #d6962a;
  padding: 0px 80px;

  font-size: 26px;
  font-weight: 900;

  display: flex;
  justify-content: space-between;
  align-items: center;

  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 2;

  span {
    cursor: pointer;
  }
`;

export const BattleButton = styled.div`
  width: 120px;
  height: 120px;

  background: #d6962a;
  border-radius: 50%;
  border: 8px solid #142b4d;
  color: #142b4d;
  font-size: 20px;

  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  bottom: 10px;
  left: 0;
  right: 0;
  margin: auto;

  cursor: pointer;
`;
