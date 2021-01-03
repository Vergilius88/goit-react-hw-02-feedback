import styled from "styled-components";

export default {
  ListUl: styled.ul`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    padding: 0;
    margin: 0 auto;
    width: 400px;
    list-style: none;
  `,
  ListItem: styled.li`
    display: flex;
    align-items: center;
    margin: 5px auto;
    background-color: white;
    text-align: center;
  `,
};
