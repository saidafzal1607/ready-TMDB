import configs from "../configs.js";
const {API_KEY, URL, URL_IMG, DEFAULT_IMG} = configs;

export async function getDetailMovie(id){
    
    const res = await fetch(`${URL}tv/${id}?api_key=${API_KEY}&language=en-US`)
    const data = await res.json();
    console.log(data)
    return data
}

export function showDetail(data){
    let wrapper = document.getElementById('wrapper');
    let html = '';
    html = `
    <img class="detail-img" src="${URL_IMG}${data.poster_path}" alt=""/>
    
    `
    wrapper.innerHTML = html;
    
}
export async function getActors(id){
    const response = await fetch(`${URL}tv/${id}/credits?api_key=${API_KEY}&language=en-US`)
    const dataMovie = await response.json();
    return dataMovie;
    
}

export function showActors(dataMovie){
    let actors = document.getElementById('actors');
    let html = ''
    const {cast} = dataMovie;
    
    cast.forEach(item => {
        const {profile_path} = item;
        const profile = profile_path ? `${URL_IMG}${item.profile_path}` : `${DEFAULT_IMG}`; 
        html += `
        <div class="actors-wrapper">
            
            <img class="actors-img" src="${profile}" alt="${item.name}"/>
            <h2>${item.name}</h2>
        </div>
        `
        actors.innerHTML = html;
    });
}