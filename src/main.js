const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    headers:{
        'Content-Type':'aplicattion/json;charsert=utf-8'
    },
    params:{
        api_key: API_KEY,
    },
})

async function getTrendingMovies(){ //Nos trae las peliculas en tendencia
    const { data } = await api(`trending/movie/day`); // {  data    } con este obtenemos el objeto data de la url a la que estamos
                                                      //haciendo la solicitud (tambien hay otros valores aparte de data que podemos obtener)

    trendingMoviesPreviewList.innerHTML ="";
    

    const movies = data.results;
    movies.forEach(movie => { //Por cada pelicula le creamos una estructura HTML
        
        const divMovie = document.createElement('div');
        divMovie.classList.add('movie-container')

        const imgMovie = document.createElement('img');
        imgMovie.classList.add('movie-img')
        imgMovie.setAttribute('alt', movie.tittle);
        imgMovie.setAttribute('src', `https://image.tmdb.org/t/p/w300/${movie.poster_path}`); //https://image.tmdb.org/t/p/w300/ es la url base de las imagenes

        divMovie.append(imgMovie);
        trendingMoviesPreviewList.append(divMovie);
    });
}

async function getCategoriesPreviewThemes(){ //Nos trae las categorias y sus temas(colores)
    const { data } = await api(`genre/movie/list`); 
   
    categoriesPreviewSection.innerHTML = "";

    const categories = data.genres;
    data.genres.forEach(category => { //Por cada pelicula le creamos una estructura HTML
        
        const divCategory = document.createElement('div');
        divCategory.classList.add('category-container');

        const h3Category = document.createElement('h3');
        h3Category.classList.add('category-title');
        h3Category.setAttribute('id', `id${category.id}`);
        const textCategory = document.createTextNode(category.name);

        h3Category.appendChild(textCategory);
        divCategory.append(h3Category);
        categoriesPreviewSection.append(divCategory);
    });
}


getTrendingMovies();
getCategoriesPreviewThemes();