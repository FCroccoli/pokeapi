import styled from "styled-components";

export const PokeListUl = styled.ul`
  margin-bottom: 20px;
  border: 2px solid var(--blue-4);
  border-left: 0px;
  height: 90%;
  width: 100%;
  border-radius: 0px 4px 4px 0px;
  padding: 20px 8px 20px 0px;
  display: flex;
  flex-direction: column;
  gap: 18px;
  background-color: var(--blue-3);
  overflow: scroll;
`;

export const PokeListItem = styled.li`
  height: 40px;
  min-height: 40px;
  padding: 0px 18px;
  border: 2px solid var(--blue-4);
  border-left: 0px;
  border-radius: 0px 4px 4px 0px;
  color: var(--blue-4);
  width: 90%;
  transition: 0.5s;
  display: flex;
  align-items: center;
  gap: 12px;
  font-weight: bold;
  &:hover {
    height: 50px;
    width: 95%;
    background-color: var(--blue-2);
    cursor: pointer;
  }
`;
