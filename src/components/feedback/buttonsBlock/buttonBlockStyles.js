import styled from "styled-components";

export default {
  Button: styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    width: 100%;
    height: 50px;
    border-radius: 10px;
    margin: 20px 5px;
    background-color: rgb(255, 255, 0);
    text-transform: uppercase;
    cursor: pointer;
    &:hover {
      background-color: rgb(155, 255, 155);
      border-radius: 90px;
    }
    &:focus {
      border-radius: 10px;
      outline: none;
    }
  `,
  Div: styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    padding: 0;
    margin: 0 auto;
    width: 400px;
    list-style: none;
  `,
};
