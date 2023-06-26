import Header from "./components/header";
import { PokeProvider } from "./contexts/pokeContext";
import RoutesMain from "./routes/routes";
import { Wrapper } from "./styles/wrapperStyle";

export default function App() {
  return (
    <PokeProvider>
      <Wrapper>
        <Header />
        <RoutesMain />
      </Wrapper>
    </PokeProvider>
  );
}
