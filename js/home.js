import configs from "../configs.js";

const {API_KEY, URL , URL_IMG} = configs;

export async function getPopularTVMovies(){
    const res = await fetch(`${URL}tv/popular?api_key=${API_KEY}&language=en-US&page=1`);
    const data =await res.json();
    return data
}

export function showPopularMovies(data){
    const { results } = data ;
    let wrapper = document.getElementById("wrapper-cards");
    let html = '';
    results.forEach(movie => {
        const {poster_path, name, id , first_air_date} = movie;
        html += `
        <div data-id="${id}" class="card">
            <img class="card-img" src="${URL_IMG}${poster_path}" alt="" />
            
            <h2 class="card-name">${name}</h2>
            <p class="card-date">${dayjs(first_air_date).format("MMM,DD YYYY")}</p>
        </div>`
        
        wrapper.innerHTML = html;
    });
}
