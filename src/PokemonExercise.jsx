import { useState } from "react";

const pokemon_inicial = [
  {
    id: "luxray",
    name: "Luxray",
    type: "Electric",
    image:
      "https://db.pokemongohub.net/_next/image?url=%2Fimages%2Fofficial%2Ffull%2F405.webp&w=640&q=75",
  },
  {
    id: "giratina",
    name: "Giratina",
    type: "Ghost",
    image:
      "https://db.pokemongohub.net/_next/image?url=%2Fimages%2Fofficial%2Ffull%2F487.webp&w=640&q=75",
  },
  {
    id: "cubone",
    name: "Cubone",
    type: "Ground",
    image:
      "https://db.pokemongohub.net/_next/image?url=%2Fimages%2Fofficial%2Ffull%2F104.webp&w=640&q=75",
  },
];


export default function PokemonExercise() {

  const [pokemons, setPokemons] = useState(pokemon_inicial);

  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [image, setImage] = useState("");

  function handleDelete(id) {
    setPokemons((prev) => prev.filter((p) => p.id !== id));
  }

  function handleAdd(e) {
    e.preventDefault();

    const cleanName = name.trim();
    const cleanImage = image.trim();
    const cleanType = type.trim();
    if (!cleanName || !cleanType || !cleanImage) return;

    const newPokemon = {
      id: crypto.randomUUID(),
      name: cleanName,
      type: cleanType,
      image: cleanImage,
    };

    setPokemons((prev) => [newPokemon, ...prev]);

    setName("");
    setType("");
    setImage("");
  }

  return (
    <section style={{ padding: 16 }}>
      <h2>Pokémon Exercise</h2>

      <form onSubmit={handleAdd} style={{ display: "grid", gap: 10, maxWidth: 420 }}>
        <div style={{ display: "grid", gap: 6 }}>
          <label>Name</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder=""
          />
        </div>

        <div style={{ display: "grid", gap: 6 }}>
          <label>Type</label>
          <input
            value={type}
            onChange={(e) => setType(e.target.value)}
            placeholder=""
          />
        </div>

        <div style={{ display: "grid", gap: 6 }}>
          <label>Image URL</label>
          <input
            value={image}
            onChange={(e) => setImage(e.target.value)}
            placeholder=""
          />
        </div>

        <button type="submit" disabled={!name.trim() || !type.trim() || !image.trim()}>
          Add Pokémon
        </button>
      </form>

      <div
        style={{
          marginTop: 18,
          display: "grid",
          gap: 12,
          gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
        }}
      >
        {pokemons.map((p) => (
          <article
            key={p.id}
            style={{
              border: "1px solid #ddd",
              borderRadius: 12,
              padding: 12,
              display: "grid",
              gap: 10,
            }}
          >
            <img
              src={p.image}
              alt={p.name}
              width={96}
              height={96}
              style={{ objectFit: "contain" }}
              onError={(e) => {
                e.currentTarget.src = "https://via.placeholder.com/96?text=No+Img";
              }}
            />

            <div>
              <div style={{ fontWeight: 700, fontSize: 18 }}>{p.name}</div>
              <div style={{ opacity: 0.85 }}>{p.type}</div>
            </div>

            <button onClick={() => handleDelete(p.id)}>Delete</button>
          </article>
        ))}
      </div>
    </section>
  );
}