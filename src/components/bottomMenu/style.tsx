import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 80px;

  background: #528f92;
  color: #ff9741;
  padding: 0px 80px;

  font-family: "Montserrat";
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

  background: #ffffff;
  border-radius: 50%;
  border: 7px solid #ff9741;

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
