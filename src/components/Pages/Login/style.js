import styled from "styled-components";

export const Form = styled.form`
  background: #212529;
  width: 95%;
  height: 450px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 3.20867px;
  box-shadow: 0px 3.20867px 32.0867px -8.02168px rgba(0, 0, 0, 0.25);

  input {
    width: 95%;
    height: 38px;
    margin-bottom: 28px;
    border: 1.2182px solid #f8f9fa;
  }
  h3 {
    margin-top: 42px;
    margin-bottom: 28px;
  }
  p {
    width: 95%;
    margin-bottom: 22px;
    font-size: 9px;
  }
  button {
    margin-bottom: 27px;
    height: 38.5px;
  }

  span {
    margin-bottom: 17px;
    font-size: 9.62602px;
  }

  .error {
    width: 95%;
    color: #ff9494;
    margin-top: -10px;
    margin-bottom: 10px;
  }
  @media (min-width: 481px) {
    background: #212529;
    width: 369px;
    height: 502px;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 4px;
    box-shadow: 0px 3.20867px 32.0867px -8.02168px rgba(0, 0, 0, 0.25);

    input {
      width: 95%;
      height: 48px;
      margin-bottom: 20px;
      font-size: 16px;
    }
    h3 {
      margin-top: 33px;
      margin-bottom: 22px;
      font-size: 18px;
    }
    p {
      width: 95%;
      margin-bottom: 17px;
      font-size: 12px;
    }
    button {
      margin-bottom: 34px;
      height: 48px;
      font-size: 16px;
    }

    span {
      margin-bottom: 22px;
      font-size: 12px;
    }
  }
`;
