import { useContext } from "react";
import { NextPageButton, PageControlWrapper } from "./style";
import { GiPreviousButton, GiNextButton } from "react-icons/gi";
import { PokeContext } from "../../contexts/pokeContext";

export default function PageControllButtons() {
  const { currentPage, totalPages, setCurrentPage } = useContext(PokeContext);
  return (
    <PageControlWrapper>
      <NextPageButton
        onClick={() => {
          setCurrentPage(currentPage - 1);
        }}
        disabled={currentPage <= 1}
      >
        <GiPreviousButton />
      </NextPageButton>
      <span>
        {currentPage} of {totalPages}
      </span>
      <NextPageButton
        onClick={() => {
          setCurrentPage(currentPage + 1);
        }}
        disabled={currentPage >= totalPages}
      >
        <GiNextButton />
      </NextPageButton>
    </PageControlWrapper>
  );
}
