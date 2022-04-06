import React from 'react';
import { NavLink } from 'react-router-dom';

import { OutlineButton } from '../components/button/Button';
import Slides from '../components/slides/Slides';
import MovieList from '../components/movie-list/MovieList';

import { category, movieType, tvType } from '../api/tmdbApi';

const Home = () => {
    return (
        <>
            <Slides/>
            <div className="container">
                <div className="section mb-3">
                    <div className="section__header mb-2">
                        <h2>Trending Movies</h2>
                        <NavLink to="/movie">
                            <OutlineButton className="small">View more</OutlineButton>
                        </NavLink>
                    </div>
                    <MovieList category={category.movie} type={movieType.popular}/>
                </div>

                <div className="section mb-3">
                    <div className="section__header mb-2">
                        <h2>Top Rated Movies</h2>
                        <NavLink to="/movie">
                            <OutlineButton className="small">View more</OutlineButton>
                        </NavLink>
                    </div>
                    <MovieList category={category.movie} type={movieType.top_rated}/>
                </div>

                <div className="section mb-3">
                    <div className="section__header mb-2">
                        <h2>Trending TV</h2>
                        <NavLink to="/tv">
                            <OutlineButton className="small">View more</OutlineButton>
                        </NavLink>
                    </div>
                    <MovieList category={category.tv} type={tvType.popular}/>
                </div>

                <div className="section mb-3">
                    <div className="section__header mb-2">
                        <h2>Top Rated TV</h2>
                        <NavLink to="/tv">
                            <OutlineButton className="small">View more</OutlineButton>
                        </NavLink>
                    </div>
                    <MovieList category={category.tv} type={tvType.top_rated}/>
                </div>
            </div>
        </>
    );
}

export default Home;
