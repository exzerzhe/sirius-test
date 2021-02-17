import { RecoilRoot } from "recoil";
import Game from "../components/game";
import { Background } from "../styles";

const App = () => {
  return (
    <RecoilRoot>
      <Background>
        <Game />
      </Background>
    </RecoilRoot>
  );
};

export default App;
