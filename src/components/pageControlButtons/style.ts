import styled from "styled-components";

export const NextPageButton = styled.button`
  border: 2px solid var(--blue-4);
  background-color: transparent;
  color: var(--blue-4);
  padding: 8px 30px;
  border-radius: 10px;
  background-color: var(--blue-3);
  &:hover {
    cursor: pointer;
    background-color: var(--blue-2);
  }
`;

export const PageControlWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: var(--blue-4);
`;
