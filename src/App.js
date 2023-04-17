import logo from "./logo.svg";
import "./App.css";

function App() {
    return (
        <div className="App">
            <header>
                <h1 className="title">Pokedex Région de Kanto</h1>
                <form>
                    <div className="searchPkmn">
                        <label for="name">Recherche par nom: </label>
                        <input name="name" id="name" autocomplete="off" />
                    </div>
                </form>
            </header>
            <div className="cards">
                <div className="card">
                    <img
                        className="imgPkmn"
                        src="https://raw.githubusercontent.com/Yarkis01/PokeAPI/images/sprites/4/regular.png"
                        alt="avatar"
                    />
                    <div className="pkmnCard">
                        <h4 className="namePkmn">Salameche</h4>
                    </div>
                </div>
                <div className="card">
                    <img
                        className="imgPkmn"
                        src="https://raw.githubusercontent.com/Yarkis01/PokeAPI/images/sprites/3/regular.png"
                        alt="avatar"
                    />
                    <div className="pkmnCard">
                        <h4 className="namePkmn">Florizarre</h4>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
