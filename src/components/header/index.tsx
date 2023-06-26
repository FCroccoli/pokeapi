import { HeaderText } from "./style";
import logo from "../../assets/pokedex_logo.png";

export default function Header() {
  return (
    <HeaderText>
      <img src={logo} alt="" />
    </HeaderText>
  );
}
