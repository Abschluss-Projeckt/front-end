import React from "react";

function Home() {
  const images = [
    { src: "../imgs/close-up-turkish-baklava.jpg", alt: "Baklava" },
    {
      src: "../imgs/imam-bayildi-traditional-turkish-food.jpg",
      alt: "imam Bayildi",
    },
    {
      src: "../imgs/pide-lahmajun.jpg",
      alt: "pide lahmajun",
    },
  ];

  const recipes = [
    { id: 1, name: "Baba Ghanousch", image: "../imgs/Baba ghanoush.jpg" },
    { id: 2, name: "Spaghetti Bolognese", image: "../imgs/spaghetti.jpg" },
    {
      id: 3,
      name: "Gegrillte Hähnchenbrust",
      image: "../imgs/grilled-chicken-breasts.jpg",
    },
  ];

  return (
    <div>
      <section style={galleryStyle}>
        <h2>Unsere neuesten Kreationen</h2>
        <div style={imageListStyle}>
          {images.map((image) => (
            <img
              key={image.src}
              src={image.src}
              alt={image.alt}
              style={imageStyle}
            />
          ))}
        </div>
      </section>
      <section style={recipeListStyle}>
        <h2>Beliebte Rezepte</h2>
        <ul style={listStyle}>
          {recipes.map((recipe) => (
            <li key={recipe.id}>
              <img src={recipe.image} alt={recipe.name} style={thumbStyle} />
              <a href={`/rezepte/${recipe.id}`} style={linkStyle}>
                {recipe.name}
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default Home;

const galleryStyle = {
  padding: "2rem",
  backgroundColor: "#f9f9f9",
};

const imageListStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginTop: "2rem",
};

const imageStyle = {
  width: "30%",
  borderRadius: "0.5rem",
  height: "300px",
};

const recipeListStyle = {
  padding: "2rem",
  backgroundColor: "#fff",
};

const listStyle = {
  listStyle: "none",
  margin: 0,
  padding: 0,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  flexWrap: "wrap",
};

const thumbStyle = {
  width: "100%",
  height: "auto",
  borderRadius: "0.5rem",
  marginBottom: "0.5rem",
};

const linkStyle = {
  color: "#333",
  textDecoration: "none",
  fontWeight: 500,
};
