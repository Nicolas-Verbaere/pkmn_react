function Main() {
    return (
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
    );
}

export default Main;
