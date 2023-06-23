import styled from "styled-components";

export const PokeListUl = styled.ul`
  margin-bottom: 20px;
  border: 4px solid var(--blue-4);
  max-height: 90%;
  width: 25%;
  border-radius: 4px;
  padding: 20px 8px;
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
  border: 2px dotted var(--blue-4);
  border-top: 4px solid var(--blue-4);
  border-right: 2px solid var(--blue-4);
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
  /* p {
    display: flex;
    height: 100%;
    border-top: 2px solid var(--blue-4);
    border-bottom: 2px solid var(--blue-4);
    align-items: center;
  } */
`;
