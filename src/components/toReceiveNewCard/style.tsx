import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;

  background: #ffffff;
  padding: 15px;
  gap: 15px;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;

  position: fixed;
  z-index: 4;
  top: 0;
  left: 0;

  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 0px;
  }
`;

export const Footer = styled.div`
  padding: 20px;

  display: flex;
  justify-content: flex-end;

  position: fixed;
  bottom: 80px;
  right: 120px;
`;
