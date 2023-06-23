import { PokeProvider } from "./contexts/pokeContext";
import Display from "./pages/home";
import { Wrapper } from "./styles/wrapperStyle";

export default function App() {
  return (
    <PokeProvider>
      <Wrapper>
        <Display />
      </Wrapper>
    </PokeProvider>
  );
}
