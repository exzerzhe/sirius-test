import { RecoilRoot } from "recoil";
import Game from "../components/game";
import { Background } from "../styles";

const App = () => (
  <RecoilRoot>
    <Background>
      <Game />
    </Background>
  </RecoilRoot>
);
export default App;
