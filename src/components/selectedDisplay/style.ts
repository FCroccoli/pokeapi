import styled from "styled-components";

export const SelectedPokeDisplayWrapper = styled.div`
  border: 2px solid var(--blue-4);
  border-right: 0px;
  height: 90%;
  min-height: 440px;
  width: 25%;
  border-radius: 4px 0px 0px 4px;
  padding: 2.5% 8px 2.5% 0px;
  display: flex;
  flex-direction: column;
  gap: 18px;
  background-color: var(--blue-3);
  overflow: scroll;
  align-self: flex-end;
  color: var(--blue-4);
  font-weight: bold;
  align-items: center;
`;

export const SelectedHeader = styled.h2`
  font-size: 22px;
  width: 90%;
  height: 5%;
  border-bottom: 1px solid var(--blue-4);
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const PokeType = styled.span`
  color: var(${(props) => props.color});
  background-color: var(--blue-4);
  padding: 4px 8px;
  border-radius: 4px;
`;

export const SelectedContentWrapper = styled.div`
  position: relative;
  width: 90%;
  height: 45%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: flex-start;
`;

export const PokeTypeWrapper = styled.div`
  display: flex;
  gap: 8px;
  width: 45%;
  justify-content: flex-end;
`;

export const PokeSpriteWrapper = styled.figure`
  width: 42%;

  img {
    width: 100%;
    height: auto;
  }
`;

export const PokeInfoWrapper = styled.div`
  height: 100%;
  width: 55%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 16px;
  p {
    font-weight: normal;
  }
`;

export const PokeStatsWrapper = styled.div`
  height: 50%;
  width: 100%;
  display: flex;
  justify-content: center;
`;
