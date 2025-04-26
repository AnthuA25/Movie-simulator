const MovieComponent = ({ category, image, title, price, description, onMovieClick }) => {
  const [isFavorite, setIsFavorite] = React.useState(false);
  const toggleFavorite = (e) => {
    e.stopPropagation();
    setIsFavorite(!isFavorite);
  };
  const movie = { category, image, title, price, description };
  return (
    <div className="card" data-category={category} onClick={() => onMovieClick(movie)}>
      <img src={image} />
      <div className="title">
        <h5>{title}</h5>
      </div>
      <div onClick={toggleFavorite} className={`favorite ${isFavorite ? 'active' : ''}`}>❤</div>
      <div className="price">{price}</div>
      <div className="category">{category}</div>
    </div>
  );
};

const MovieListComponent = ({ moviesData, onMovieClick }) => (
  <div className="card-grid">
    {moviesData.map((card, index) => (
      <MovieComponent
        title={card.title}
        price={card.price}
        image={card.image}
        category={card.category}
        description={card.description}
        key={index}
        onMovieClick={onMovieClick}
      />
    ))}
  </div>
);


function MovieDetailComponent({ movie, goBack }) {
    return (
      <div className="movie-detail">
        <button onClick={goBack}>← Volver</button>
        <h2>{movie.title}</h2>
        <p><strong>Categoría:</strong> {movie.category}</p>
        <p><strong>Descripción:</strong> {movie.description}</p>
      </div>
    );
  }
