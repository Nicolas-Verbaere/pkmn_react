function Header() {
    return (
        <header>
            <h1 className="title">Pokedex Région de Kanto</h1>
            <form>
                <div className="searchPkmn">
                    <label for="name">Recherche par nom: </label>
                    <input name="name" id="name" autocomplete="off" />
                </div>
            </form>
        </header>
    );
}

export default Header;
