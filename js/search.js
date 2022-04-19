import configs from '../configs.js'
const { API_KEY, URL, URL_IMG, DEFAULT_IMG } = configs

export async function searchMovie (query) {
  const res = await fetch(`${URL}search/movie${query}&api_key=${API_KEY}`)
  const data = await res.json()
  return data
}

export function showResultMovies(data){
    let wrapper = document.getElementById('wrapper');
    let html = '';
    const {results} = data;
    results.forEach(movie => {
        console.log(movie)
        html += `
        <div class="movie-card">
            <img class="movie-img" src="${URL_IMG}${movie.poster_path}" alt="${movie.title}"/>
            <div class="movie-content">
                <h3 class="movie-title">${movie.title}</h3>
                <p class=""movie-date>${movie.release_date}</p>
                <p class="movie-overview">${movie.overview}</p>

            </div>
        </div>

        `
        wrapper.innerHTML = html;
    });
}
