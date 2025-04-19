const MovieComponent = ({ category, image, title, price }) => {
    return (
        <div className="card" data-category={category}>
            <img src={image} />
            <div className="title">
                <h5>{title}</h5>
            </div>
            <div className="favorite">❤</div>
            <div className="price">{price}</div>
            <div className="category">{category}</div>
        </div>
    );
};

const MovieListComponent = ({ moviesData }) => (
    <div className="card-grid">
        {moviesData.map((card, index) => (
            <MovieComponent
                title={card.title}
                price={card.price}
                image={card.image}
                category={card.category}
                key={index}
            />
        ))}
    </div>
);
