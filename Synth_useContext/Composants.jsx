// ==================== Header ====================

export function Header() {
    return (
        <header>
            <h2>Mon catalogue</h2>

            <nav>
                <a href="#">Accueil</a>
                <a href="#">Produits</a>
                <a href="#">Favoris (1)</a>
                <a href="#">Profil</a>
            </nav>

            <p>Utilisateur : Ahmed</p>
        </header>
    );
}


// ==================== Home ====================

export function Home() {
    return (
        <section>
            <h2>Bienvenue, Ahmed</h2>

            <p>
                Bienvenue dans notre application de
                consultation de produits.
            </p>

            <p>Vous avez 1 produit(s) dans vos favoris.</p>
        </section>
    );
}


// ==================== Products ====================

export function Products() {
    return (
        <section>
            <h2>Liste des produits</h2>

            <table>
                <thead>
                    <tr>
                        <th>Produit</th>
                        <th>Prix</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>Clavier</td>
                        <td>250 DH</td>
                        <td>
                            <button>Ajouter aux favoris</button>
                        </td>
                    </tr>

                    <tr>
                        <td>Souris</td>
                        <td>120 DH</td>
                        <td>
                            <button>Ajouter aux favoris</button>
                        </td>
                    </tr>

                    <tr>
                        <td>Écran</td>
                        <td>1500 DH</td>
                        <td>
                            <button>Ajouter aux favoris</button>
                        </td>
                    </tr>

                    <tr>
                        <td>Casque</td>
                        <td>350 DH</td>
                        <td>
                            <button>Ajouter aux favoris</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </section>
    );
}


// ==================== Favorites ====================

export function Favorites() {
    return (
        <section>
            <h2>Mes favoris</h2>

            <table>
                <thead>
                    <tr>
                        <th>Produit</th>
                        <th>Prix</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>Clavier</td>
                        <td>250 DH</td>
                        <td>
                            <button>Supprimer</button>
                        </td>
                    </tr>
                </tbody>
            </table>

            <p>Nombre de favoris : 1</p>

            <button className="full-width">
                Vider les favoris
            </button>
        </section>
    );
}


// ==================== Profile ====================

export function Profile() {
    return (
        <section>
            <h2>Mon profil</h2>

            <form>
                <label htmlFor="nom">Nom</label>

                <input
                    type="text"
                    id="nom"
                    defaultValue="Ahmed"
                />

                <label htmlFor="email">Email</label>

                <input
                    type="email"
                    id="email"
                    defaultValue="ahmed@gmail.com"
                />

                <button type="button">
                    Enregistrer
                </button>
            </form>

            <p>
                Informations actuelles :
                Ahmed — ahmed@gmail.com
            </p>
        </section>
    );
}


// ==================== Footer ====================

export function Footer() {
    return (
        <footer>
            <p>Application de Ahmed — 1 favori(s)</p>
        </footer>
    );
}