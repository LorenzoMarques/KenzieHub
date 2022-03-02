import styled from "styled-components";

export const Card = styled.div`
  width: 95%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;
  background-color: #212529;
  position: absolute;
  top: 25%;
  left: 15px;
  box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  form {
    width: 85%;
    margin: auto;

    p {
      margin-top: 19px;
      margin-bottom: 26px;
    }
    input {
      width: 100%;
      height: 38px;
      background-color: #343b41;
    }
    select {
      width: 100%;
      height: 38px;
      background-color: #343b41;
      margin-bottom: 16px;
    }
    button {
      height: 38.5px;
      width: 100%;
      margin-bottom: 25px;
      border: unset;
    }

    div {
      display: flex;
      button {
        height: 38px;
      }
      .button1 {
        width: 60%;
        margin-right: 17px;
      }
      .button2 {
        width: 35%;
        background-color: #868e96;
      }
    }
  }
  @media (min-width: 481px) {
    width: 369px;
    top: 35%;
    left: -50%;
    right: -50%;

    h3 {
      font-size: 14px;
    }
    p {
      font-size: 12.182px;
    }
    input {
      font-size: 16.2426px;
    }
    select {
      font-size: 16.2426px;
    }
    button {
      font-size: 16px;
    }
  }
`;

export const Header = styled.div`
  width: 100%;
  background-color: #343b41;
  height: 40px;
  display: flex;
  border-radius: 4px;

  div {
    margin-left: 0px;
    display: flex;
    width: 85%;
    align-items: center;
    position: relative;
    height: 40px;
    margin: auto;

    button {
      width: 15px;
      height: 20px;
      position: absolute;
      right: 0px;
      font-size: 10px;
      background-color: #343b41;
      border: unset;
    }
  }
`;
