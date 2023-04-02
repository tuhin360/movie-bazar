import React from 'react';

const SingleCart = ({movie, handleWatchTime}) => {
    // const {movie} = props;
    console.log(movie);
    return (
        <div>
            <div className="movie-card card text-center w-100 m-auto col-md-6">
                <div className="movie-poster w-25 m-auto">
                    <img className='w-75' src={movie.poster} alt="" />
                </div>
                <h3>{movie.movieNames}</h3>
                <p>{movie.description}</p>
                <div className='timeAndRating d-flex justify-content-around'>
                    <p>Watchtime: {movie.watchTime}</p>
                    <p>Rating: {movie.imdbRating}</p>
                </div>
                <button onClick={() => handleWatchTime(movie.watchTime)} className='btn btn-info w-75 m-auto'>Book Now</button>
            </div>
        </div>
    );
};

export default SingleCart;