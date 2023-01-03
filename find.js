const KEY_API = "4e5914215cf342b8afa15cd8b64d454f";

const input = document.getElementById("btnSave");

input.addEventListener("click", function (event) {
    event.preventDefault();

    const palavraChave = document.getElementById("name").value;
    const section = document.getElementById("listaDeNoticias");

    async function getNews(){
        const response = await fetch("https://newsapi.org/v2/everything?q="+ palavraChave + "&apiKey=4e5914215cf342b8afa15cd8b64d454f");
    
        const news = await response.json();
    
        news.articles.forEach(noticia => {
    
            const newsCard = `
        <article class="col-6">
              <div class="card mb-3">
                <div class="row g-0">
                  <div class="col-md-4">
                    <img
                      src="${noticia.urlToImage}"
                      class="img-fluid rounded-start"
                      alt="..."
                    />
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <h5 class="card-title">
                        ${noticia.title}
                      </h5>
                      <p class="card-text">
                        ${noticia.description}
                      </p>
                      <a
                        href="${noticia.url}"
                        class="btn btn-primary"
                        >Go to News</a
                      >
                    </div>
                  </div>
                </div>
              </div>
            </article>`;
            
    
            section.innerHTML += newsCard; 
        });

    }

    getNews();
 });


 

