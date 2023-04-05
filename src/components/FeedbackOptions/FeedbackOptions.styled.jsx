import styled from 'styled-components';

export const List = styled.ul`
  list-style: none;
  display: flex;
  gap: 5px;
  padding-left: 0;
`;

export const Item = styled.li`
  width: 70px;
  padding: 5px;
  background-color: #6b8e23;
  color: #ffffff;
  border: none;
  text-align: center;
  cursor: pointer;

  :hover {
    background-color: #008000;
  }
`;
