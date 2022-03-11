const namberofFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const perconalMovieDB = {
    count: namberofFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


const a = prompt('Один из последних просмотренных фильмов?', ''),
    b = prompt('На скуолько отцените его?', ''),
    c = prompt('Один из последних просмотренных фильмов?', ''),
    d = prompt('На скуолько отцените его?', '');


perconalMovieDB.movies[a] = b;
perconalMovieDB.movies[a] = d;

console.log(perconalMovieDB);