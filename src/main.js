async function getTrendingMovies(){ //Nos trae las peliculas en tendencia
    const res = await fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`);
    const data = await res.json();
   
    const movies = data.results;
    console.log({movies});

    const tredingPreviewMoviesSection = document.querySelector('#trendingPreview .trendingPreview-movieList')

    movies.forEach(movie => { //Por cada pelicula le creamos una estructura HTML
        
        const divMovie = document.createElement('div');
        divMovie.classList.add('movie-container')

        const imgMovie = document.createElement('img');
        imgMovie.classList.add('movie-img')
        imgMovie.setAttribute('alt', movie.tittle);
        imgMovie.setAttribute('src', `https://image.tmdb.org/t/p/w300/${movie.poster_path}`); //https://image.tmdb.org/t/p/w300/ es la url base de las imagenes

        divMovie.append(imgMovie);
        tredingPreviewMoviesSection.append(divMovie);
    });
}

async function getCategoriesPreviewThemes(){ //Nos trae las categorias y sus temas(colores)
    const res = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`);
    const data = await res.json();
   
    const categories = data.genres;
    console.log({categories});

    const categoriesPreviewSection = document.querySelector('#categoriesPreview .categoriesPreview-list');
    console.log(categoriesPreviewSection);

    categories.forEach(category => { //Por cada pelicula le creamos una estructura HTML
        
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