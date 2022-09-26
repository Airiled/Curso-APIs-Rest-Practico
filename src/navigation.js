searchFormBtn.addEventListener('click', () => {
    location.hash = "#search=";
});

trendingBtn.addEventListener('click', () => {
    location.hash = "#trends";
});

arrowBtn.addEventListener('click', () => {
    history.back();
});

window.addEventListener('load', locationPage, false);
window.addEventListener('hashchange', locationPage, false);

function locationPage(){
    if(location.hash.startsWith('#trends')){
        trendsPage();
    }else if(location.hash.startsWith('#category=')){
        categoriesPage();
    }else if(location.hash.startsWith('#movies=')){ //Vista especifica de una pelicula
        moviesDetailsPage();
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

function moviesDetailsPage(){
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
}

