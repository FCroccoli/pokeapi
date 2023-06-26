import styled from "styled-components";

export const DisplayWrapper = styled.main`
  background-color: var(--blue-1);
  width: 95%;
  height: 75%;
  min-height: 610px;
  outline: 2px groove var(--red-2);
  border: 2px solid;
  border-radius: 0px 30px 0px 30px;
  padding: 20px 0px 20px 0px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  @media (max-width: 800px) {
    overflow: scroll;
    flex-wrap: nowrap;
    gap: 20px;
  }
`;

export const PageWrapper = styled.div`
  width: 28%;
  height: 100%;
  align-self: center;
  @media (max-width: 800px) {
    width: 100%;
    height: fit-content;
  }
`;
