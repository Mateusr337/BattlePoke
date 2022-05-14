import styled from "styled-components";

export const Container = styled.div`
  width: 150px;
  height: 200px;

  border: 3px solid #d6962a;
  border-radius: 8px;
  gap: 5px;

  display: flex;
  flex-direction: column;
`;

export const Image = styled.img`
  width: 100%;
  height: 100px;

  border-radius: 5px 5px 0px 0px;
`;

export const Data = styled.div`
  width: 100%;
  min-height: 40px;

  font-family: "Montserrat";
  font-weight: 500;

  padding: 0px 10px;

  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Types = styled.div`
  width: 100%;
  height: 40px;

  gap: 10px;

  display: flex;
  justify-content: center;

  img {
    width: 30px;
    height: 30px;
  }
`;
