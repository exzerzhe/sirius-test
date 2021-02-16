import { RecoilRoot } from 'recoil'
import Game from "../components/game";
const App = () => {
    const background = {
        backgroundImage: `url('/background2.png')`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: "100%",
        height: "100%",
        position: 'absolute',
        top: 0,
        right: 0,
    }
    return (
        <RecoilRoot>
            <div style={background}>
                <Game/>
            </div>
        </RecoilRoot>
    )
}

export default App
