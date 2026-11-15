
function Header() {
  return (
    <header>
      <h2>Espace joueur</h2>
      <span>Connecté</span>
      <hr />
    </header>
  );
}

function Profil() {
  return (
    <section>
      <h3>Profil</h3>
      <p>Joueur : Ahmed</p>
      <p>Score actuel : 20</p>
    </section>
  );
}

function Actions() {
  return (
    <section>
      <button>+ 5 points</button>
      <button>Réinitialiser</button>
      <button>Déconnexion</button>
    </section>
  );
}

export default function Ex1() {
  return (
    <div>
      <Header />
      <Profil />
      <Actions />
    </div>
  );
}
