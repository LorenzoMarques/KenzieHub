import styled from "styled-components";

export const TecContainer = styled.div`
  width: 95%;
  margin: auto;
  display: flex;
  flex-direction: column;
  background: #212529;
  align-items: center;
  justify-content: center;
  padding-top: 25px;
  div {
    width: 95%;
    height: 48px;
    background-color: #121214;
    border-radius: 4px;
    margin-bottom: 25px;
    display: flex;
    position: relative;
    align-items: center;
    span {
      position: absolute;
      right: 10px;
    }
    h3 {
      margin-left: 10px;
    }
  }
  div:hover {
    background-color: #343b41;
    cursor: pointer;
  }
  @media (min-width: 769px) {
    width: 779.73px;
  }
`;

export const Nav = styled.nav`
  display: flex;
  margin: auto;
  align-items: center;
  margin-top: 26px;
  position: relative;
  margin-bottom: 32px;
  width: 95%;
  img {
    width: 105px;
    height: 14px;
  }
  button {
    height: 32px;
    width: 55px;
    position: absolute;
    right: 0px;
  }

  @media (min-width: 769px) {
    width: 779.73px;
  }
`;

export const HeaderTec = styled.header`
  height: 131px;
  width: 95%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;

  h2 {
    margin-top: 35px;
    font-size: 18px;
  }
  span {
    margin-top: 10px;
    margin-bottom: 34px;
    font-size: 12px;
  }
  @media (min-width: 769px) {
    width: 779.73px;
  }
`;

export const GreyDiv = styled.div`
  width: 100%;
  border-top: 1px solid #212529;
`;

export const Tec = styled.div`
  width: 95%;
  margin: auto;
  display: flex;
  position: relative;
  margin-bottom: 26px;
  margin-top: 26px;
  align-items: center;
  button {
    width: 32px;
    height: 32px;
    position: absolute;
    right: 0px;
    font-size: 20px;
  }
  @media (min-width: 769px) {
    width: 779.73px;
  }
`;

export const OpacityDiv = styled.div`
  opacity: ${(prop) => prop.opacity};
`;
