import configs from "../configs.js";
const {API_KEY, URL, URL_IMG} = configs;

export async function getDetailMovie(id){
    
    const res = await fetch(`${URL}tv/${id}?api_key=${API_KEY}&language=en-US`)
    const data = res.json();
    return data
}

export function showDetail(data){
    let wrapper = document.getElementById('wrapper');
    let html = '';
    html = `
    <img src="${URL_IMG}${data.poster_path}" alt=""/>`
    wrapper.innerHTML = html;
}