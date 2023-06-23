import { NextPageButton, PageControlWrapper } from "./style";
import { GiPreviousButton, GiNextButton } from "react-icons/gi";

export default function PageControllButtons() {
  return (
    <PageControlWrapper>
      <NextPageButton>
        <GiPreviousButton />
      </NextPageButton>
      <span>1 de todas</span>
      <NextPageButton>
        <GiNextButton />
      </NextPageButton>
    </PageControlWrapper>
  );
}
