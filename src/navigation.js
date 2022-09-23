window.addEventListener('load', locationPage, false);
window.addEventListener('hashchange', locationPage, false);

function locationPage(){
    console.log(location)
    if(location.hash.startsWith('#trends')){
        trendsPage();
    }else if(location.hash.startsWith('#category')){
        categoriesPage();
    }else if(location.hash.startsWith('#movies=')){ //Vista especifica de una pelicula
        moviesPage();
    }else if(location.hash.startsWith('#search=')){ //Independientemente de la busqueda que se realiza se abrira esta vista
        searchPage();
    }else{
        homePage();
    }
}

function trendsPage(){
    console.log('trends!');
}

function categoriesPage(){
    console.log('categories!');
}

function moviesPage(){
    console.log('movies!');
}

function searchPage(){
    console.log('search!');
}

function homePage(){
    console.log('Home'); //Si se busca cualquier cosa diferente no tiramos error, sino que devolvemos directamente al home
}