import styled from "styled-components";

export const Container = styled.div`
  width: 80%;
  height: 80%;

  background: #ffffff;
  border-radius: 25px;
  border: 2px solid #000000;
  gap: 15px;
  padding: 20px 0px 70px;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  position: fixed;
  z-index: 4;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;

  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 0px;
  }
`;

export const Title = styled.div`
  width: 100%;

  font-family: "MontSerrat";
  font-size: 25px;
  font-weight: 700;
  color: #1ab81f;

  text-align: center;
`;

export const Footer = styled.div`
  padding: 20px;

  display: flex;
  justify-content: flex-end;

  position: fixed;
  bottom: 80px;
  right: 120px;
`;
