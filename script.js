const namberofFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const perconalMovieDB = {
    count: namberofFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for (let i = 0; i < 2; i++) {
    const a = prompt('Один из последних просмотренных фильмов?', ''),
        b = prompt('На скуолько отцените его?', '');

    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        perconalMovieDB.movies[a] = b;
        console.log('done');
    } else {
        console.log('error');
        i--;
    }
}

if (perconalMovieDB.count < 10) {
    console.log("Прсмотрено доволно мало фильмов");
} else if (perconalMovieDB.count >= 10 && perconalMovieDB.count < 30) {
    console.log("Вы классический зритель");
} else if (perconalMovieDB.count >= 30) {
    console.log("Вы киноман");
} else {
    console.log("Призошла обшибка");
}

console.log(perconalMovieDB);