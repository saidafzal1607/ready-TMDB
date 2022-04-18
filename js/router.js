import * as home from "./home.js";
import { getDetailMovie, showDetail } from "./movieDetails.js";

document.addEventListener("DOMContentLoaded", function (e){
    if(location.pathname === "/index.html" || location.pathname === "/" ){
        home.getPopularTVMovies().then((data)=>{
            home.showPopularMovies(data);
            const cardList = document.querySelectorAll(".card");
            cardList.forEach((card)=>{
                card.addEventListener("click", (e)=>{
                    const id = card.dataset.id;
                    localStorage.setItem("id", id);
                    console.log(id)
                    location.pathname = "/movieDetails.html"
                })
            })
        }).catch((error)=>{
            console.log(error)
        })
    }

    if(location.pathname === "/movieDetails.html" || location.pathname === "/"){
        let id = localStorage.getItem("id");
        getDetailMovie(id).then((data)=>{
            showDetail(data)
        }).catch((err)=>{
            console.log(error)
        })
    }
})