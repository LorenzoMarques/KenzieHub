import styled from "styled-components";

export const ContainerRegister = styled.div`
  background: #212529;
  width: 95%;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 3.20867px;
  box-shadow: 0px 3.20867px 32.0867px -8.02168px rgba(0, 0, 0, 0.25);

  form {
    width: 95%;
    display: flex;
    flex-direction: column;
  }

  input {
    width: 100%;
    height: 38px;
    margin-bottom: 21px;
    border: unset;
  }
  h3 {
    margin-top: 33px;
    margin-bottom: 17px;
  }
  p {
    width: 95%;
    margin-bottom: 17px;
    font-size: 9px;
  }
  button {
    margin-bottom: 27px;
    height: 38.5px;

  }

  span {
    margin-bottom: 22px;
    font-size: 9.62602px;
  }

  select {
    width: 100%;
    height: 38px;
    margin-bottom: 17px;
  }

  .error {
    width: 95%;
    color: #ff9494;
    margin-top: -10px;
    margin-bottom: 10px;
  }

  }
  @media (min-width: 481px) {
    width: 370px;

    input {
      width: 95%;
      height: 48px;
      margin-bottom: 26px;
      font-size: 16px;
    }
    h3 {
      margin-top: 33px;
      margin-bottom: 22px;
      font-size: 18px;
    }
    p {
      width: 95%;
      margin-bottom: 22px;
      font-size: 12.182px;    }
    button {
      margin-bottom: 34px;
      height: 48px;
      font-size: 16px;

    }

    span {
      margin-bottom: 28px;
      font-size: 12px;
    }

    select {
      width:  95%;
     height: 38px;
      margin-bottom: 20px;
      border: unset;
    }
  }
  `;

export const Header = styled.header`
  display: flex;
  margin: auto;
  margin-top: 55px;
  position: relative;
  margin-bottom: 30px;
  margin-left: 13px;
  button {
    width: 79.54px;
    height: 25.58px;
    position: absolute;
    right: 12px;
    font-size: 9.59437px;
    border: unset;
  }
  img {
    margin: unset;
    margin-top: 5px;
  }

  @media (min-width: 481px) {
    display: flex;
    width: 370px;
    margin: auto;
    margin-top: 56px;
    margin-bottom: 38px;
    position: relative;
    button {
      width: 79.54px;
      height: 25.58px;
      position: absolute;
      right: 13px;
    }
    img {
      margin: unset;
      margin-top: 5px;
      margin-left: 13px;
    }
  }
`;
