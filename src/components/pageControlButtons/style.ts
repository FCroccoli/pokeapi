import styled from "styled-components";

export const NextPageButton = styled.button`
  border: 2px solid var(--blue-4);
  color: var(--blue-4);
  padding: 8px 30px;
  border-radius: 10px;
  background-color: var(--blue-3);
  &:hover {
    cursor: pointer;
    background-color: var(--blue-2);
  }
  &:disabled {
    cursor: default;
    color: var(--blue-1);
    &:hover {
      cursor: default;
      background-color: var(--blue-3);
    }
  }
`;

export const PageControlWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: var(--blue-4);
`;
