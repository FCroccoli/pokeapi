import styled from "styled-components";

export const SearchWrapper = styled.div`
  margin-bottom: 20px;
  border: 2px solid var(--blue-4);
  border-left: 0px;
  height: 90%;
  width: 28%;
  border-radius: 0px 4px 4px 0px;
  padding: 20px 0px;
  display: flex;
  flex-direction: column;
  gap: 18px;
  background-color: var(--blue-3);
  @media (max-width: 800px) {
    width: 100%;
    height: fit-content;
    border-right: 0px;
    border-radius: 0px;
  }
`;

export const SearchBarContainer = styled.div`
  width: 100%;
  border: 2px solid var(--blue-4);
  border-left: 0px;
  border-right: 0px;
  display: flex;
  flex-direction: row;

  input {
    padding-left: 12px;
    border: none;
    width: 80%;
    background-color: transparent;
    font-size: 16px;
    font-weight: bold;
    color: var(--blue-4);
    &:focus {
      outline: none;
    }
  }

  button {
    width: 20%;
    padding: 8px 0px;
    border: none;
    background-color: var(--blue-4);
    color: var(--blue-1);
    font-size: 16px;
    font-weight: bold;
    &:hover {
      cursor: pointer;
    }
    &:disabled {
      color: var(--blue-2);
      cursor: default;
    }
  }
`;

export const ClearButton = styled.button`
  width: max-content;
  padding: 8px 12px;
  border: none;
  background-color: var(--blue-4);
  color: var(--blue-1);
  font-size: 16px;
  font-weight: bold;
  align-self: flex-end;
  justify-self: flex-end;
  &:hover {
    cursor: pointer;
  }
  &:disabled {
    color: var(--blue-2);
    cursor: default;
  }
`;

export const FilterWrapper = styled.fieldset`
  margin-top: 12px;
  color: var(--blue-4);
  font-size: 16px;
  padding: 20px;
  border-top: 2px solid var(--blue-4);
  display: flex;
  flex-direction: column;
  gap: 12px;
  select {
    position: relative;
    left: 16px;
    margin-bottom: 8px;
    width: 80%;
    padding: 8px;
    border: none;
    background-color: var(--blue-4);
    color: var(--blue-1);
    font-size: 16px;
    font-weight: bold;
  }
`;
