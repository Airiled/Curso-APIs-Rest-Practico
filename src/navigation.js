searchFormBtn.addEventListener('click', () => {
    searchFormInput.value;
    location.hash = `#search=${searchFormInput.value}`;
});

trendingBtn.addEventListener('click', () => {
    location.hash = "#trends";
});

arrowBtn.addEventListener('click', () => {
    history.back();
});

// trendingBtn.addEventListener('click', );

window.addEventListener('load', locationPage, false);
window.addEventListener('hashchange', locationPage, false);

function locationPage(){
    if(location.hash.startsWith('#trends')){
        trendsPage();
    }else if(location.hash.startsWith('#category=')){
        categoriesPage();
    }else if(location.hash.startsWith('#movie=')){ //Vista especifica de una pelicula
        movieDetailsPage();
    }else if(location.hash.startsWith('#search=')){ //Independientemente de la busqueda que se realiza se abrira esta vista
        searchPage();
    }else{
        homePage();
    }

    window.scrollTo(0, 0);
}

function homePage(){
    console.log('Home'); //Si se busca cualquier cosa diferente no tiramos error, sino que devolvemos directamente al home

    headerSection.classList.remove('header-container--long');
    headerSection.style.background = '';
    arrowBtn.classList.add('inactive');
    headerTitle.classList.remove('inactive');
    headerCategoryTitle.classList.add('inactive');
    searchForm.classList.remove('inactive');

    trendingPreviewSection.classList.remove('inactive');
    categoriesPreviewSection.classList.remove('inactive');
    genericSection.classList.add('inactive');
    movieDetailSection.classList.add('inactive');
}

function trendsPage(){
    console.log('trends!');
    headerSection.classList.remove('header-container--long');
    headerSection.style.background = '';
    arrowBtn.classList.remove('inactive');
    arrowBtn.classList.remove('header-arrow--white');
    headerTitle.classList.add('inactive');
    headerCategoryTitle.classList.remove('inactive');
    searchForm.classList.add('inactive');

    trendingPreviewSection.classList.add('inactive');
    categoriesPreviewSection.classList.add('inactive');
    genericSection.classList.remove('inactive');
    movieDetailSection.classList.add('inactive');

    headerCategoryTitle.innerHTML = 'Trending Movies (Week)';
  
    getTrendingMoviesVist();
}

function categoriesPage(){  //vista de categorias
    console.log('categories!');
    headerSection.classList.remove('header-container--long');
    headerSection.style.background = '';
    arrowBtn.classList.remove('inactive');
    arrowBtn.classList.remove('header-arrow--white');
    headerTitle.classList.add('inactive');
    headerCategoryTitle.classList.remove('inactive');
    searchForm.classList.add('inactive');

    trendingPreviewSection.classList.add('inactive');
    categoriesPreviewSection.classList.add('inactive');
    genericSection.classList.remove('inactive');
    movieDetailSection.classList.add('inactive');

    // ['category', 'id name']
    const [_, categoryData] = location.hash.split('='); 
    const [categoryId, categoryName] = location.hash.split('-');
    console.log(categoryId.split('='));
    headerCategoryTitle.innerHTML = categoryName;
    const id = categoryId.split('=');

    getMoviesByCategory(id[1]);
}

function movieDetailsPage(){
    headerSection.classList.add('header-container--long');
    arrowBtn.classList.remove('inactive');
    arrowBtn.classList.add('header-arrow--white');
    headerTitle.classList.add('inactive');
    headerCategoryTitle.classList.add('inactive');
    searchForm.classList.add('inactive');

    trendingPreviewSection.classList.add('inactive');
    categoriesPreviewSection.classList.add('inactive');
    genericSection.classList.add('inactive');
    movieDetailSection.classList.remove('inactive');

    // ['category', 'id name']
    const [_, idMovie] = location.hash.split('='); 
    // const [categoryId, categoryName] = location.hash.split('-');
    // headerCategoryTitle.innerHTML = searchValue;
    // console.log(searchValue);

    getMovieDetails(idMovie);

}

function searchPage(){
    console.log('search!');
    headerSection.classList.remove('header-container--long');
    headerSection.style.background = '';
    arrowBtn.classList.remove('inactive');
    arrowBtn.classList.remove('header-arrow--white');
    headerTitle.classList.add('inactive');
    headerCategoryTitle.classList.remove('inactive');
    searchForm.classList.remove('inactive');

    trendingPreviewSection.classList.add('inactive');
    categoriesPreviewSection.classList.add('inactive');
    genericSection.classList.remove('inactive');
    movieDetailSection.classList.add('inactive');

    // ['category', 'id name']
    const [_, searchValue] = location.hash.split('='); 
    // const [categoryId, categoryName] = location.hash.split('-');
    headerCategoryTitle.innerHTML = searchValue;
    console.log(searchValue);
    getMoviesBySearch(searchValue);

    // getMoviesBySearch(search);
}

